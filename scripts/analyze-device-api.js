#!/usr/bin/env node

/**
 * Device API Analyzer
 * 
 * This script connects to a Ubiquiti device, analyzes its API endpoints,
 * and updates our OpenAPI specifications with any new or modified endpoints.
 * 
 * Usage:
 *   node analyze-device-api.js --type network --host unifi.local --username admin --password secret
 *   node analyze-device-api.js --type protect --host protect.local --username admin --password secret
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const axios = require('axios');
const https = require('https');
const yaml = require('js-yaml');

// Parse command line arguments
const args = process.argv.slice(2);
const argMap = {};
for (let i = 0; i < args.length; i += 2) {
  argMap[args[i].replace(/^--/, '')] = args[i + 1];
}

// Required parameters
const requiredParams = ['type', 'host', 'username', 'password'];
const missingParams = requiredParams.filter(param => !argMap[param]);
if (missingParams.length > 0) {
  console.error(`Missing required parameters: ${missingParams.join(', ')}`);
  console.error('Usage: node analyze-device-api.js --type [network|protect] --host [hostname] --username [username] --password [password]');
  process.exit(1);
}

// Configuration
const deviceType = argMap.type;
const host = argMap.host;
const username = argMap.username;
const password = argMap.password;
const port = argMap.port || '443';
const debug = argMap.debug === 'true';

// Paths
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'specs');
const SPEC_FILE = path.join(OUTPUT_DIR, `unifi-${deviceType}.yaml`);

// Install required packages if not already installed
try {
  require('js-yaml');
  require('axios');
} catch (e) {
  console.log('Installing required dependencies...');
  execSync('npm install --no-save js-yaml axios', { stdio: 'inherit' });
}

// Create axios instance for API requests
const api = axios.create({
  baseURL: `https://${host}:${port}`,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Endpoints to probe based on device type
const deviceEndpoints = {
  network: [
    { path: '/api/login', method: 'post', data: { username, password } },
    { path: '/api/self', method: 'get' },
    { path: '/api/sites', method: 'get' },
    { path: '/api/s/default/stat/device', method: 'get' },
    { path: '/api/s/default/stat/sta', method: 'get' },
    { path: '/api/s/default/stat/health', method: 'get' },
    { path: '/api/s/default/rest/user', method: 'get' },
    { path: '/api/s/default/rest/setting', method: 'get' },
    { path: '/api/logout', method: 'post' }
  ],
  protect: [
    { path: '/api/auth/login', method: 'post', data: { username, password } },
    { path: '/api/users/self', method: 'get' },
    { path: '/proxy/protect/api/bootstrap', method: 'get' },
    { path: '/proxy/protect/api/cameras', method: 'get' },
    { path: '/proxy/protect/api/nvr', method: 'get' },
    { path: '/proxy/protect/api/events', method: 'get' },
    { path: '/api/auth/logout', method: 'post' }
  ]
};

/**
 * Load the existing OpenAPI spec
 */
function loadSpec() {
  if (!fs.existsSync(SPEC_FILE)) {
    console.error(`Spec file ${SPEC_FILE} not found. Run update-specs.js first.`);
    process.exit(1);
  }
  
  try {
    const specContent = fs.readFileSync(SPEC_FILE, 'utf8');
    return yaml.load(specContent);
  } catch (error) {
    console.error(`Error loading spec file: ${error}`);
    process.exit(1);
  }
}

/**
 * Save the updated OpenAPI spec
 */
function saveSpec(spec) {
  try {
    const specContent = yaml.dump(spec);
    fs.writeFileSync(SPEC_FILE, specContent);
    console.log(`✅ Updated ${SPEC_FILE}`);
  } catch (error) {
    console.error(`Error saving spec file: ${error}`);
    process.exit(1);
  }
}

/**
 * Analyze the response and update the OpenAPI spec accordingly
 */
function analyzeResponse(spec, endpoint, response) {
  const { path, method } = endpoint;
  
  if (!spec.paths[path]) {
    spec.paths[path] = {};
  }
  
  if (!spec.paths[path][method]) {
    console.log(`📝 Adding new endpoint: ${method.toUpperCase()} ${path}`);
    spec.paths[path][method] = {
      summary: `Auto-detected endpoint: ${path}`,
      description: `This endpoint was automatically detected from device analysis.`,
      tags: [`Auto-detected - ${deviceType}`]
    };
  }
  
  // Add response schema if it doesn't exist
  if (response.data) {
    if (!spec.paths[path][method].responses) {
      spec.paths[path][method].responses = {};
    }
    
    if (!spec.paths[path][method].responses['200']) {
      spec.paths[path][method].responses['200'] = {
        description: 'Successful response'
      };
    }
    
    if (!spec.paths[path][method].responses['200'].content) {
      spec.paths[path][method].responses['200'].content = {
        'application/json': {
          schema: {
            type: 'object'
          }
        }
      };
    }
    
    // Try to infer schema properties from the response
    try {
      const schemaProperties = inferSchemaProperties(response.data);
      
      // Only update if we found properties
      if (Object.keys(schemaProperties).length > 0) {
        const schemaRef = spec.paths[path][method].responses['200'].content['application/json'].schema;
        
        if (!schemaRef.properties) {
          schemaRef.properties = {};
        }
        
        // Merge the properties
        Object.assign(schemaRef.properties, schemaProperties);
      }
    } catch (error) {
      if (debug) {
        console.error(`Error inferring schema for ${method.toUpperCase()} ${path}:`, error);
      }
    }
  }
  
  return spec;
}

/**
 * Infer schema properties from response data
 */
function inferSchemaProperties(data, depth = 0) {
  const properties = {};
  
  // Prevent infinite recursion
  if (depth > 2) {
    return properties;
  }
  
  if (typeof data !== 'object' || data === null) {
    return properties;
  }
  
  for (const [key, value] of Object.entries(data)) {
    // Skip null values
    if (value === null) {
      properties[key] = { type: 'string', nullable: true };
      continue;
    }
    
    // Determine the type
    const type = Array.isArray(value) ? 'array' : typeof value;
    properties[key] = { type };
    
    // Handle arrays
    if (type === 'array' && value.length > 0) {
      const itemType = typeof value[0];
      
      if (itemType === 'object') {
        // For arrays of objects, infer the schema of the first item
        properties[key].items = {
          type: 'object',
          properties: inferSchemaProperties(value[0], depth + 1)
        };
      } else {
        properties[key].items = { type: itemType };
      }
    }
    
    // Handle nested objects
    if (type === 'object') {
      properties[key].properties = inferSchemaProperties(value, depth + 1);
    }
  }
  
  return properties;
}

/**
 * Main function
 */
async function main() {
  console.log(`Analyzing ${deviceType} API on ${host}...`);
  
  // Load the existing spec
  const spec = loadSpec();
  
  // Get the endpoints to probe
  const endpoints = deviceEndpoints[deviceType];
  if (!endpoints) {
    console.error(`Unknown device type: ${deviceType}`);
    process.exit(1);
  }
  
  // Track cookies
  let cookies = [];
  
  // Process each endpoint
  for (const endpoint of endpoints) {
    try {
      console.log(`Probing ${endpoint.method.toUpperCase()} ${endpoint.path}...`);
      
      // Set cookies if available
      if (cookies.length > 0) {
        api.defaults.headers.Cookie = cookies.join('; ');
      }
      
      // Make the request
      const response = await api({
        method: endpoint.method,
        url: endpoint.path,
        data: endpoint.data,
        validateStatus: () => true // Don't throw on error status
      });
      
      // Capture cookies
      const setCookie = response.headers['set-cookie'];
      if (setCookie) {
        cookies = setCookie.map(cookie => cookie.split(';')[0]);
      }
      
      // Log the response
      if (debug) {
        console.log(`Response ${response.status} ${response.statusText}`);
        console.log(JSON.stringify(response.data, null, 2));
      } else {
        console.log(`Response ${response.status} ${response.statusText}`);
      }
      
      // Skip analysis for failed requests
      if (response.status < 200 || response.status >= 300) {
        console.log(`Skipping analysis for ${endpoint.method.toUpperCase()} ${endpoint.path} (status: ${response.status})`);
        continue;
      }
      
      // Analyze the response and update the spec
      analyzeResponse(spec, endpoint, response);
    } catch (error) {
      console.error(`Error probing ${endpoint.method.toUpperCase()} ${endpoint.path}:`, error.message);
    }
  }
  
  // Save the updated spec
  saveSpec(spec);
  
  console.log('Analysis complete.');
}

// Run the script
main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});