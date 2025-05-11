# UniFi Protect Motion Detection Example

This example demonstrates how to connect to a UniFi Protect controller and receive real-time motion detection events.

## Basic Motion Detection Script

```javascript
const { UniFiProtectAPI } = require('ubiquiti-api-companion');

// Create API instance
const api = new UniFiProtectAPI({
  nvr: 'https://protect.example.com',
  username: 'admin',
  password: 'password',
  debug: true // Enable debug logging
});

async function main() {
  try {
    // Login to the controller
    console.log('Logging in to UniFi Protect...');
    await api.login();
    
    // Get cameras
    const cameras = api.getCameras();
    console.log(`Found ${cameras.length} cameras:`);
    
    // Print camera information
    cameras.forEach(camera => {
      console.log(`- ${camera.name} (${camera.mac})`);
      console.log(`  Model: ${camera.type}`);
      console.log(`  Status: ${camera.state === 'CONNECTED' ? 'Online' : 'Offline'}`);
      console.log(`  Last motion: ${camera.lastMotion ? new Date(camera.lastMotion).toLocaleString() : 'None'}`);
      console.log('');
    });
    
    // Connect to WebSocket for real-time updates
    console.log('Connecting to WebSocket for real-time updates...');
    api.connectToUpdates();
    
    // Listen for WebSocket events
    api.on('websocket-open', () => {
      console.log('WebSocket connected successfully');
    });
    
    api.on('websocket-error', (error) => {
      console.error('WebSocket error:', error);
    });
    
    api.on('websocket-close', () => {
      console.log('WebSocket connection closed');
    });
    
    // Listen for motion events
    api.on('motion', (cameraId, data) => {
      // Find camera name from its ID
      const camera = cameras.find(cam => cam.id === cameraId);
      const cameraName = camera ? camera.name : cameraId;
      
      console.log(`Motion detected on ${cameraName} at ${new Date().toLocaleString()}`);
      
      // Print additional data if in debug mode
      if (api.config.debug) {
        console.log('Event data:', JSON.stringify(data, null, 2));
      }
      
      // You could trigger other actions here, like:
      // - Send a notification
      // - Start recording
      // - Trigger a smart home action
    });
    
    // Listen for doorbell events if there are any doorbells
    api.on('doorbell', (doorbellId, data) => {
      // Find doorbell name from its ID
      const doorbell = cameras.find(cam => cam.id === doorbellId);
      const doorbellName = doorbell ? doorbell.name : doorbellId;
      
      console.log(`Doorbell ${doorbellName} rang at ${new Date().toLocaleString()}`);
    });
    
    console.log('Waiting for events...');
    console.log('Press Ctrl+C to exit');
    
    // Keep the process running
    process.on('SIGINT', async () => {
      console.log('Shutting down...');
      await api.logout();
      process.exit(0);
    });
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
```

## Advanced: Motion Detection with Snapshots

This example shows how to capture a snapshot from a camera when motion is detected.

```javascript
const { UniFiProtectAPI } = require('ubiquiti-api-companion');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Create API instance
const api = new UniFiProtectAPI({
  nvr: 'https://protect.example.com',
  username: 'admin',
  password: 'password'
});

async function downloadSnapshot(camera, timestamp) {
  const snapshotUrl = `${api.config.nvr}:${api.config.port}/proxy/protect/api/cameras/${camera.id}/snapshot`;
  
  try {
    const response = await axios({
      method: 'GET',
      url: snapshotUrl,
      responseType: 'stream',
      headers: {
        Cookie: api.getCookies() // Assuming there's a method to get the cookies
      }
    });
    
    const directory = path.join(__dirname, 'snapshots');
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
    
    const filename = `${camera.name.replace(/[^a-z0-9]/gi, '_')}_${timestamp.toISOString().replace(/[:.]/g, '-')}.jpg`;
    const filepath = path.join(directory, filename);
    
    const writer = fs.createWriteStream(filepath);
    response.data.pipe(writer);
    
    return new Promise((resolve, reject) => {
      writer.on('finish', () => resolve(filepath));
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Failed to download snapshot: ${error}`);
    return null;
  }
}

async function main() {
  try {
    // Login to the controller
    await api.login();
    
    // Get cameras
    const cameras = api.getCameras();
    
    // Connect to WebSocket for real-time updates
    api.connectToUpdates();
    
    // Listen for motion events
    api.on('motion', async (cameraId, data) => {
      const camera = cameras.find(cam => cam.id === cameraId);
      if (!camera) return;
      
      const timestamp = new Date();
      console.log(`Motion detected on ${camera.name} at ${timestamp.toLocaleString()}`);
      
      // Download a snapshot
      console.log(`Downloading snapshot from ${camera.name}...`);
      const snapshotPath = await downloadSnapshot(camera, timestamp);
      
      if (snapshotPath) {
        console.log(`Snapshot saved to ${snapshotPath}`);
      }
    });
    
    console.log('Waiting for motion events...');
    console.log('Press Ctrl+C to exit');
    
    // Keep the process running
    process.on('SIGINT', async () => {
      console.log('Shutting down...');
      await api.logout();
      process.exit(0);
    });
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
```

## Integration with Home Automation Systems

You can integrate this API with home automation systems like Home Assistant, Node-RED, or your own custom system.

Here's an example of how to trigger Phillips Hue lights when motion is detected:

```javascript
const { UniFiProtectAPI } = require('ubiquiti-api-companion');
const axios = require('axios');

// Configuration
const protectConfig = {
  nvr: 'https://protect.example.com',
  username: 'admin',
  password: 'password'
};

const hueConfig = {
  bridgeIp: '192.168.1.100',
  username: 'hue-bridge-username',
  groupId: 1 // Light group to control
};

// Create API instance
const api = new UniFiProtectAPI(protectConfig);

// Function to turn on lights
async function turnOnLights() {
  try {
    await axios.put(
      `http://${hueConfig.bridgeIp}/api/${hueConfig.username}/groups/${hueConfig.groupId}/action`,
      { on: true, bri: 254 } // Full brightness
    );
    console.log('Lights turned on');
    
    // Turn off lights after 5 minutes
    setTimeout(async () => {
      await axios.put(
        `http://${hueConfig.bridgeIp}/api/${hueConfig.username}/groups/${hueConfig.groupId}/action`,
        { on: false }
      );
      console.log('Lights turned off');
    }, 5 * 60 * 1000);
    
  } catch (error) {
    console.error('Failed to control lights:', error);
  }
}

async function main() {
  try {
    // Login to the controller
    await api.login();
    
    // Connect to WebSocket for real-time updates
    api.connectToUpdates();
    
    // Listen for motion events
    api.on('motion', async (cameraId, data) => {
      const timestamp = new Date();
      console.log(`Motion detected at ${timestamp.toLocaleString()}`);
      
      // Turn on lights
      await turnOnLights();
    });
    
    console.log('System armed and ready');
    
    // Keep the process running
    process.on('SIGINT', async () => {
      console.log('Shutting down...');
      await api.logout();
      process.exit(0);
    });
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
```