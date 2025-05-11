# The Ultimate Ubiquiti API Companion

[![npm version](https://img.shields.io/npm/v/ubiquiti-api-companion.svg)](https://www.npmjs.com/package/ubiquiti-api-companion)
[![CI](https://github.com/danielborrowman/ubiquiti-api-companion/workflows/CI/badge.svg)](https://github.com/danielborrowman/ubiquiti-api-companion/actions?query=workflow%3ACI)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/ubiquiti-api-companion.svg)](https://www.npmjs.com/package/ubiquiti-api-companion)

A comprehensive and up-to-date Ubiquiti API library built on OpenAPI standards. This project aims to unify and document all Ubiquiti API endpoints for developers to easily integrate with Ubiquiti products.

## Current Status

This project is under active development. Currently implemented:

- ✅ OpenAPI specifications for UniFi Network and UniFi Protect
- ✅ Custom TypeScript API clients
- ✅ Auto-generated clients from OpenAPI specs
- ✅ Real-time event handling for UniFi Protect
- ✅ Automated spec updating from GitHub repositories
- ✅ Combined API specification

## Features

- Complete OpenAPI specifications for all Ubiquiti products
- Automatic updates to keep pace with Ubiquiti firmware changes
- SDK generation for multiple languages
- Comprehensive documentation of all endpoints
- Real-time event handling capabilities
- Support for UniFi Network, UniFi Protect, UniFi Access, and more

## Supported Products

- UniFi Network Controller - **Implemented**
- UniFi Protect - **Implemented**
- UniFi Access - *Planned*
- UniFi Talk - *Planned*
- UniFi LED - *Planned*
- UniFi LTE - *Planned*
- AirOS - *Planned*
- EdgeOS - *Planned*

## Getting Started

See the [documentation](/docs/README.md) for detailed usage instructions.

### Installation

```bash
npm install ubiquiti-api-companion
```

### Using the Custom API Clients

```typescript
import { UniFiNetworkAPI } from 'ubiquiti-api-companion';

async function main() {
  const api = new UniFiNetworkAPI({
    controller: 'https://unifi.example.com',
    username: 'admin',
    password: 'password',
    site: 'default'
  });
  
  await api.login();
  
  // Get all devices
  const devices = await api.getDevices();
  console.log(devices);
  
  // Log out when done
  await api.logout();
}

main().catch(console.error);
```

### Using the Generated API Clients

```typescript
import { OpenAPI, DefaultService } from 'ubiquiti-api-companion/dist/generated/unifi-network';

async function main() {
  // Configure the API client
  OpenAPI.BASE = 'https://unifi.example.com';
  OpenAPI.WITH_CREDENTIALS = true;
  
  // Login
  await DefaultService.networkLogin({
    requestBody: {
      username: 'admin',
      password: 'password'
    }
  });
  
  // Get devices
  const devices = await DefaultService.networkGetDevices({
    site: 'default'
  });
  
  console.log(devices);
  
  // Logout
  await DefaultService.networkLogout();
}

main().catch(console.error);
```

## API Discovery and Monitoring

The project includes tools to automatically discover and monitor Ubiquiti API endpoints:

```bash
# Initialize the firmware monitor configuration
npm run init-config

# Edit the configuration with your device details
# Then run the firmware monitor
npm run monitor-firmware --config scripts/config.json

# Analyze a specific device's API
npm run analyze-device -- --type network --host unifi.example.com --username admin --password secret
```

The firmware monitor checks your devices for new firmware releases and automatically analyzes their APIs to keep your specifications up-to-date. It's designed to be run as a daemon or scheduled task to continuously monitor for changes.

## Development

Clone this repository and install dependencies:

```bash
git clone https://github.com/danielborrowman/ubiquiti-api-companion.git
cd ubiquiti-api-companion
npm install
```

Build the project:

```bash
npm run build
```

Run the examples:

```bash
npm run example:network
npm run example:protect
npm run example:generated
```

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](/docs/CONTRIBUTING.md) for details.

## License

MIT