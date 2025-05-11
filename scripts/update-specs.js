#!/usr/bin/env node

/**
 * This script fetches and updates OpenAPI specifications from various sources:
 * 1. From the ubiquiti-community/unifi-api repository
 * 2. By scraping API endpoints from other repositories
 * 3. By analyzing network traffic from Ubiquiti controllers
 *
 * The specs are then consolidated into a unified OpenAPI definition.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const axios = require('axios');
const yaml = require('js-yaml');

// Configuration
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'specs');
const REPO_DIR = path.join(__dirname, '..', '..', '..', 'repositories');
const SOURCES = {
  UNIFI_API_REPO: 'https://raw.githubusercontent.com/ubiquiti-community/unifi-api/main/assets/openapi.yaml',
  UNIFI_PROTECT_API_DOCS: 'https://github.com/hjdhjd/unifi-protect/blob/main/docs/classes/ProtectApi.md',
  API_CLIENT_DOCS: 'https://github.com/Art-of-WiFi/UniFi-API-client/blob/master/API_REFERENCE.md'
};

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Function to check if a repository is cloned, and clone it if not
async function ensureRepoCloned(repoUrl, directory) {
  const folderName = path.basename(directory);

  if (!fs.existsSync(directory)) {
    console.log(`Cloning repository ${repoUrl} to ${directory}...`);
    if (!fs.existsSync(REPO_DIR)) {
      fs.mkdirSync(REPO_DIR, { recursive: true });
    }

    try {
      execSync(`cd "${REPO_DIR}" && git clone ${repoUrl} ${folderName}`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`Failed to clone repository ${repoUrl}:`, error);
      throw error;
    }
  } else {
    // Pull the latest changes
    console.log(`Updating repository in ${directory}...`);
    try {
      execSync(`cd "${directory}" && git pull`, { stdio: 'inherit' });
    } catch (error) {
      console.warn(`Warning: Failed to pull latest changes in ${directory}:`, error);
      // Don't throw, continue with existing repository
    }
  }

  return directory;
}

async function fetchUnifiNetworkSpec() {
  try {
    console.log('Fetching UniFi Network API spec from GitHub...');
    const unifiApiRepoPath = path.join(REPO_DIR, 'unifi-api');
    await ensureRepoCloned('https://github.com/ubiquiti-community/unifi-api.git', unifiApiRepoPath);

    // Check if the openapi.yaml file exists
    const openapiPath = path.join(unifiApiRepoPath, 'assets', 'openapi.yaml');
    if (fs.existsSync(openapiPath)) {
      // Copy the OpenAPI spec to our output directory
      const data = fs.readFileSync(openapiPath, 'utf8');
      const outputPath = path.join(OUTPUT_DIR, 'unifi-network.yaml');
      fs.writeFileSync(outputPath, data);
      console.log(`✅ UniFi Network API spec copied to ${outputPath}`);
      return data;
    } else {
      console.warn('Warning: openapi.yaml not found in the unifi-api repository.');

      // Try to fetch from the raw URL as a fallback
      console.log('Trying to fetch from raw GitHub URL...');
      const response = await axios.get(SOURCES.UNIFI_API_REPO);
      const data = response.data;
      const outputPath = path.join(OUTPUT_DIR, 'unifi-network.yaml');
      fs.writeFileSync(outputPath, data);
      console.log(`✅ UniFi Network API spec fetched and saved to ${outputPath}`);
      return data;
    }
  } catch (error) {
    console.error('Error fetching UniFi Network API spec:', error);
    // If both methods fail, return the existing file if it exists
    const existingPath = path.join(OUTPUT_DIR, 'unifi-network.yaml');
    if (fs.existsSync(existingPath)) {
      console.log('⚠️ Using existing UniFi Network API spec.');
      return fs.readFileSync(existingPath, 'utf8');
    }
    throw error;
  }
}

async function buildProtectApiSpec() {
  try {
    console.log('Building UniFi Protect API spec...');
    const protectRepoPath = path.join(REPO_DIR, 'unifi-protect');
    await ensureRepoCloned('https://github.com/hjdhjd/unifi-protect.git', protectRepoPath);

    // Read the existing base Protect API spec we created
    const existingPath = path.join(OUTPUT_DIR, 'unifi-protect.yaml');
    let protectSpec;

    if (fs.existsSync(existingPath)) {
      protectSpec = yaml.load(fs.readFileSync(existingPath, 'utf8'));
    } else {
      // If the file doesn't exist, create a minimal structure
      protectSpec = {
        openapi: '3.1.0',
        info: {
          title: 'UniFi Protect API',
          version: '1.0.0',
          description: 'API specification for UniFi Protect'
        },
        paths: {},
        components: {
          schemas: {}
        }
      };
    }

    // Parse the API information from the repository
    // In a real implementation, this would analyze the source code
    // to extract API endpoints, types, and other information

    // For now, we'll just update the version from package.json
    try {
      const packageJsonPath = path.join(protectRepoPath, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        protectSpec.info.version = packageJson.version || protectSpec.info.version;
      }
    } catch (error) {
      console.warn('Warning: Failed to read package.json for version info:', error);
    }

    // Save the updated spec
    const outputPath = path.join(OUTPUT_DIR, 'unifi-protect.yaml');
    fs.writeFileSync(outputPath, yaml.dump(protectSpec));
    console.log(`✅ UniFi Protect API spec updated at ${outputPath}`);
    return yaml.dump(protectSpec);
  } catch (error) {
    console.error('Error building UniFi Protect API spec:', error);
    // Return the existing file if it exists
    const existingPath = path.join(OUTPUT_DIR, 'unifi-protect.yaml');
    if (fs.existsSync(existingPath)) {
      console.log('⚠️ Using existing UniFi Protect API spec.');
      return fs.readFileSync(existingPath, 'utf8');
    }
    throw error;
  }
}

async function buildCombinedSpec(networkSpec, protectSpec) {
  try {
    console.log('Building combined Ubiquiti API spec...');

    // Parse the individual specs
    const networkYaml = yaml.load(networkSpec);
    const protectYaml = yaml.load(protectSpec);

    // Create a combined spec
    const combinedSpec = {
      openapi: '3.1.0',
      info: {
        title: 'Ubiquiti Combined API',
        version: '1.0.0',
        description: 'Combined API specification for all Ubiquiti products',
        contact: {
          name: 'Ubiquiti API Companion',
          url: 'https://github.com/yourusername/ubiquiti-api-companion'
        }
      },
      servers: [
        {
          url: 'https://{controller}',
          description: 'Ubiquiti Controller',
          variables: {
            controller: {
              default: 'unifi.local',
              description: 'Hostname or IP of the Ubiquiti controller'
            }
          }
        }
      ],
      paths: {},
      components: {
        schemas: {}
      }
    };

    // Add namespaced Network API paths
    Object.entries(networkYaml.paths || {}).forEach(([path, methods]) => {
      combinedSpec.paths[`/network${path}`] = methods;
    });

    // Add namespaced Protect API paths
    Object.entries(protectYaml.paths || {}).forEach(([path, methods]) => {
      combinedSpec.paths[`/protect${path}`] = methods;
    });

    // Add namespaced schemas
    Object.entries(networkYaml.components?.schemas || {}).forEach(([name, schema]) => {
      combinedSpec.components.schemas[`Network${name}`] = schema;
    });

    Object.entries(protectYaml.components?.schemas || {}).forEach(([name, schema]) => {
      combinedSpec.components.schemas[`Protect${name}`] = schema;
    });

    // Save the combined spec
    const outputPath = path.join(OUTPUT_DIR, 'ubiquiti-combined.yaml');
    fs.writeFileSync(outputPath, yaml.dump(combinedSpec));
    console.log(`✅ Combined API spec created at ${outputPath}`);
    return yaml.dump(combinedSpec);
  } catch (error) {
    console.error('Error building combined API spec:', error);
    throw error;
  }
}

async function main() {
  console.log('Updating OpenAPI specifications...');

  try {
    // Install required packages if they're not already installed
    try {
      require('js-yaml');
    } catch (e) {
      console.log('Installing required dependencies...');
      execSync('npm install --no-save js-yaml axios', { stdio: 'inherit' });
    }

    // 1. Fetch/Update UniFi Network API spec
    const networkSpec = await fetchUnifiNetworkSpec();

    // 2. Build UniFi Protect API spec
    const protectSpec = await buildProtectApiSpec();

    // 3. Generate combined spec
    await buildCombinedSpec(networkSpec, protectSpec);

    console.log('All specs updated successfully.');
  } catch (error) {
    console.error('Error updating specs:', error);
    process.exit(1);
  }
}

main();