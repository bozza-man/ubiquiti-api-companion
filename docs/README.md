# The Ultimate Ubiquiti API Companion Documentation

This directory contains comprehensive documentation for the Ubiquiti API Companion.

## Table of Contents

- [Getting Started](./getting-started.md)
- [API Reference](./api-reference/README.md)
- [Examples](./examples/README.md)
- [API Discovery & Monitoring](./api-discovery.md)
- [Contributing](./CONTRIBUTING.md)

## Implementation Status

| Product | Status | Features |
|---------|--------|----------|
| UniFi Network | ✅ Implemented | Device management, client control, statistics |
| UniFi Protect | ✅ Implemented | Cameras, events, real-time updates, snapshots |
| UniFi Access | 🔄 Planned | - |
| UniFi Talk | 🔄 Planned | - |
| UniFi LED | 🔄 Planned | - |
| UniFi LTE | 🔄 Planned | - |
| AirOS | 🔄 Planned | - |
| EdgeOS | 🔄 Planned | - |

## Quick Start

### Custom API Clients

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

### Generated API Clients

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

## OpenAPI Specification

The OpenAPI specifications for each supported product are available in the `src/specs` directory:

- UniFi Network: [unifi-network.yaml](../src/specs/unifi-network.yaml)
- UniFi Protect: [unifi-protect.yaml](../src/specs/unifi-protect.yaml)
- Combined API: [ubiquiti-combined.yaml](../src/specs/ubiquiti-combined.yaml)

## Installation

```bash
npm install ubiquiti-api-companion
```

## Examples

See the [examples](../examples) directory for working code examples.

## License

MIT