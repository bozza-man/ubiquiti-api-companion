#!/usr/bin/env node

/**
 * Firmware Monitor
 * 
 * This script monitors Ubiquiti device firmware versions and triggers
 * API analysis when new firmware is detected. It keeps track of known
 * firmware versions to avoid redundant analysis.
 * 
 * Usage:
 *   node firmware-monitor.js --config path/to/config.json
 * 
 * Config file format:
 * {
 *   "devices": [
 *     {
 *       "type": "network",
 *       "host": "unifi.local",
 *       "username": "admin",
 *       "password": "password"
 *     },
 *     {
 *       "type": "protect",
 *       "host": "protect.local",
 *       "username": "admin",
 *       "password": "password"
 *     }
 *   ],
 *   "checkIntervalMinutes": 1440,
 *   "knownFirmware": {
 *     "network": ["6.5.55", "7.0.23"],
 *     "protect": ["2.2.12", "2.3.8"]
 *   }
 * }
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const axios = require('axios');
const https = require('https');

// Parse command line arguments
const args = process.argv.slice(2);
const argMap = {};
for (let i = 0; i < args.length; i += 2) {
  argMap[args[i].replace(/^--/, '')] = args[i + 1];
}

// Required parameters
if (!argMap.config) {
  console.error('Missing required parameter: --config');
  console.error('Usage: node firmware-monitor.js --config path/to/config.json');
  process.exit(1);
}

// Load configuration
const configPath = path.resolve(argMap.config);
let config;

try {
  if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  } else {
    // Create a default config
    config = {
      devices: [],
      checkIntervalMinutes: 1440, // daily
      knownFirmware: {
        network: [],
        protect: []
      }
    };
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log(`Created default config at ${configPath}`);
  }
} catch (error) {
  console.error(`Error loading config: ${error}`);
  process.exit(1);
}

// Install required packages if not already installed
try {
  require('axios');
} catch (e) {
  console.log('Installing required dependencies...');
  execSync('npm install --no-save axios', { stdio: 'inherit' });
}

/**
 * Save configuration back to file
 */
function saveConfig() {
  try {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  } catch (error) {
    console.error(`Error saving config: ${error}`);
  }
}

/**
 * Check firmware version for a UniFi Network controller
 */
async function checkNetworkFirmware(device) {
  const { host, username, password, port = '443' } = device;
  
  // Create axios instance
  const api = axios.create({
    baseURL: `https://${host}:${port}`,
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  try {
    // Login
    const loginResponse = await api.post('/api/login', { username, password });
    
    // Set cookies
    const setCookie = loginResponse.headers['set-cookie'];
    if (setCookie) {
      api.defaults.headers.Cookie = setCookie.map(cookie => cookie.split(';')[0]).join('; ');
    }
    
    // Get controller info
    const infoResponse = await api.get('/api/s/default/stat/sysinfo');
    
    // Logout
    await api.post('/api/logout');
    
    // Extract firmware version
    if (infoResponse.data && infoResponse.data.data && infoResponse.data.data.length > 0) {
      return infoResponse.data.data[0].version;
    }
    
    throw new Error('Could not determine firmware version');
  } catch (error) {
    console.error(`Error checking Network firmware: ${error.message}`);
    throw error;
  }
}

/**
 * Check firmware version for a UniFi Protect controller
 */
async function checkProtectFirmware(device) {
  const { host, username, password, port = '443' } = device;
  
  // Create axios instance
  const api = axios.create({
    baseURL: `https://${host}:${port}`,
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  try {
    // Login
    const loginResponse = await api.post('/api/auth/login', { username, password });
    
    // Set cookies
    const setCookie = loginResponse.headers['set-cookie'];
    if (setCookie) {
      api.defaults.headers.Cookie = setCookie.map(cookie => cookie.split(';')[0]).join('; ');
    }
    
    // Get bootstrap info
    const bootstrapResponse = await api.get('/proxy/protect/api/bootstrap');
    
    // Logout
    await api.post('/api/auth/logout');
    
    // Extract firmware version
    if (bootstrapResponse.data && bootstrapResponse.data.nvr) {
      return bootstrapResponse.data.nvr.firmwareVersion;
    }
    
    throw new Error('Could not determine firmware version');
  } catch (error) {
    console.error(`Error checking Protect firmware: ${error.message}`);
    throw error;
  }
}

/**
 * Check firmware version for a device
 */
async function checkFirmware(device) {
  const { type } = device;
  
  switch (type) {
    case 'network':
      return checkNetworkFirmware(device);
    case 'protect':
      return checkProtectFirmware(device);
    default:
      throw new Error(`Unknown device type: ${type}`);
  }
}

/**
 * Run API analysis for a device
 */
function analyzeDeviceAPI(device, firmwareVersion) {
  const { type, host, username, password, port = '443' } = device;
  
  return new Promise((resolve, reject) => {
    console.log(`Analyzing API for ${type} device at ${host} (firmware: ${firmwareVersion})...`);
    
    const args = [
      path.join(__dirname, 'analyze-device-api.js'),
      '--type', type,
      '--host', host,
      '--username', username,
      '--password', password
    ];
    
    if (port) {
      args.push('--port', port);
    }
    
    const process = spawn('node', args, {
      stdio: 'inherit'
    });
    
    process.on('close', code => {
      if (code === 0) {
        console.log(`API analysis completed for ${type} device at ${host}`);
        resolve();
      } else {
        console.error(`API analysis failed for ${type} device at ${host} with exit code ${code}`);
        reject(new Error(`API analysis failed with exit code ${code}`));
      }
    });
    
    process.on('error', error => {
      console.error(`Error running API analysis: ${error}`);
      reject(error);
    });
  });
}

/**
 * Check all devices
 */
async function checkDevices() {
  for (const device of config.devices) {
    try {
      console.log(`Checking ${device.type} device at ${device.host}...`);
      
      // Get firmware version
      const firmwareVersion = await checkFirmware(device);
      console.log(`Firmware version: ${firmwareVersion}`);
      
      // Check if it's a new firmware version
      if (!config.knownFirmware[device.type] || !config.knownFirmware[device.type].includes(firmwareVersion)) {
        console.log(`New firmware detected for ${device.type}: ${firmwareVersion}`);
        
        // Add to known firmware
        if (!config.knownFirmware[device.type]) {
          config.knownFirmware[device.type] = [];
        }
        
        config.knownFirmware[device.type].push(firmwareVersion);
        saveConfig();
        
        // Analyze API
        await analyzeDeviceAPI(device, firmwareVersion);
      } else {
        console.log(`Known firmware for ${device.type}: ${firmwareVersion}`);
      }
    } catch (error) {
      console.error(`Error processing device ${device.host}: ${error}`);
    }
  }
}

/**
 * Main function
 */
async function main() {
  console.log('Starting firmware monitor...');
  
  // Do an initial check
  await checkDevices();
  
  // Schedule periodic checks
  const intervalMinutes = config.checkIntervalMinutes || 1440; // default to daily
  const intervalMs = intervalMinutes * 60 * 1000;
  
  console.log(`Scheduling checks every ${intervalMinutes} minutes`);
  
  setInterval(async () => {
    console.log('Running scheduled firmware check...');
    await checkDevices();
  }, intervalMs);
}

// Run the script
main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});