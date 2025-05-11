/**
 * Example usage of the UniFi Protect API client
 */

import { UniFiProtectAPI } from '../src/unifi-protect-api';

async function main() {
  try {
    // Create an API instance
    const api = new UniFiProtectAPI({
      nvr: 'https://protect.example.com',
      username: 'admin',
      password: 'password',
      debug: true
    });
    
    // Log in to the NVR
    console.log('Logging in to UniFi Protect NVR...');
    await api.login();
    
    // Get bootstrap data (contains all cameras, sensors, etc.)
    console.log('Getting bootstrap data...');
    await api.refreshBootstrap();
    
    // Get all cameras
    const cameras = api.getCameras();
    console.log(`Found ${cameras.length} cameras:`);
    cameras.forEach(camera => {
      console.log(`- ${camera.name} (${camera.mac})`);
      console.log(`  Model: ${camera.type}`);
      console.log(`  Status: ${camera.state}`);
      console.log(`  Last Motion: ${camera.lastMotion ? new Date(camera.lastMotion).toLocaleString() : 'N/A'}`);
    });
    
    // Get doorbells
    const doorbells = api.getDoorbells();
    if (doorbells.length > 0) {
      console.log('\nFound doorbells:');
      doorbells.forEach(doorbell => {
        console.log(`- ${doorbell.name} (${doorbell.mac})`);
        console.log(`  Last Ring: ${doorbell.lastRing ? new Date(doorbell.lastRing).toLocaleString() : 'N/A'}`);
      });
    }
    
    // Set up real-time updates listener (for 30 seconds)
    console.log('\nSetting up real-time updates listener (will run for 30 seconds)...');
    api.connectToUpdates();
    
    // Listen for motion events
    api.on('motion', (cameraId, data) => {
      const camera = cameras.find(c => c.id === cameraId);
      const cameraName = camera ? camera.name : cameraId;
      console.log(`Motion detected on ${cameraName} at ${new Date().toLocaleString()}`);
    });
    
    // Listen for doorbell events
    api.on('doorbell', (doorbellId, data) => {
      const doorbell = cameras.find(c => c.id === doorbellId);
      const doorbellName = doorbell ? doorbell.name : doorbellId;
      console.log(`Doorbell ${doorbellName} rang at ${new Date().toLocaleString()}`);
    });
    
    // Wait for 30 seconds to receive events
    await new Promise(resolve => setTimeout(resolve, 30000));
    
    // Log out when done
    console.log('\nLogging out...');
    await api.logout();
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the example
main();