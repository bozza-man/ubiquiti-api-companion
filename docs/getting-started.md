# Getting Started with the Ubiquiti API Companion

This guide will help you get started with using the Ubiquiti API Companion in your projects.

## Installation

Install the package using npm:

```bash
npm install ubiquiti-api-companion
```

Or using yarn:

```bash
yarn add ubiquiti-api-companion
```

## Basic Usage

### UniFi Network API

```typescript
import { UniFiNetworkAPI } from 'ubiquiti-api-companion';

// Create an API instance
const api = new UniFiNetworkAPI({
  controller: 'https://unifi.example.com',
  username: 'admin',
  password: 'password',
  site: 'default',
  port: 443, // Optional, defaults to 443
  sslVerify: false, // Optional, defaults to false
  debug: false // Optional, defaults to false
});

// Login to the controller
await api.login();

// Get all devices
const devices = await api.getDevices();
console.log(devices);

// Get all clients
const clients = await api.getClients();
console.log(clients);

// Block a client
await api.blockClient('00:11:22:33:44:55');

// Unblock a client
await api.unblockClient('00:11:22:33:44:55');

// Get site statistics
const stats = await api.getSiteStats();
console.log(stats);

// Change site
api.setSite('another-site');

// Logout when done
await api.logout();
```

### UniFi Protect API

```typescript
import { UniFiProtectAPI } from 'ubiquiti-api-companion';

// Create an API instance
const api = new UniFiProtectAPI({
  nvr: 'https://protect.example.com',
  username: 'admin',
  password: 'password',
  port: 443, // Optional, defaults to 443
  sslVerify: false, // Optional, defaults to false
  debug: false // Optional, defaults to false
});

// Login to the controller
await api.login();

// Get all cameras
const cameras = api.getCameras();
console.log(cameras);

// Get all doorbells
const doorbells = api.getDoorbells();
console.log(doorbells);

// Connect to WebSocket for real-time updates
api.connectToUpdates();

// Listen for motion events
api.on('motion', (cameraId, data) => {
  console.log(`Motion detected on camera ${cameraId}:`, data);
});

// Listen for doorbell events
api.on('doorbell', (doorbellId, data) => {
  console.log(`Doorbell ${doorbellId} rang:`, data);
});

// Listen for event start
api.on('event-start', (eventId, data) => {
  console.log(`Event ${eventId} started:`, data);
});

// Listen for event end
api.on('event-end', (eventId, data) => {
  console.log(`Event ${eventId} ended:`, data);
});

// Logout when done
await api.logout();
```

## Error Handling

All API methods throw exceptions when errors occur. You should wrap your code in try/catch blocks to handle these errors:

```typescript
try {
  await api.login();
  const devices = await api.getDevices();
} catch (error) {
  console.error('An error occurred:', error);
}
```

## Advanced Usage

For more advanced usage examples, see the [Examples](./examples/README.md) section.