# Ubiquiti API Companion Examples

This directory contains examples of how to use the Ubiquiti API Companion in various scenarios.

## Table of Contents

- [Network Client Management](./network-client-management.md)
- [Protect Motion Detection](./protect-motion-detection.md)
- [Device Statistics](./device-statistics.md)

## Basic Example: Network Device Status

```javascript
// Import the API
const { UniFiNetworkAPI } = require('ubiquiti-api-companion');

async function main() {
  // Create API instance
  const api = new UniFiNetworkAPI({
    controller: 'https://unifi.example.com',
    username: 'admin',
    password: 'password',
    site: 'default'
  });
  
  try {
    // Login
    console.log('Logging in...');
    await api.login();
    
    // Get devices
    console.log('Getting devices...');
    const devices = await api.getDevices();
    
    // Display device information
    console.log(`Found ${devices.length} devices:`);
    devices.forEach(device => {
      console.log(`- ${device.name} (${device.mac})`);
      console.log(`  Model: ${device.model}`);
      console.log(`  Status: ${device.state === 1 ? 'Online' : 'Offline'}`);
      console.log(`  Uptime: ${formatUptime(device.uptime)}`);
      console.log(`  IP: ${device.ip}`);
      console.log('');
    });
    
    // Logout
    console.log('Logging out...');
    await api.logout();
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Helper function to format uptime in seconds to a readable format
function formatUptime(seconds) {
  if (!seconds) return 'Unknown';
  
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  const parts = [];
  if (days > 0) parts.push(`${days} day${days === 1 ? '' : 's'}`);
  if (hours > 0) parts.push(`${hours} hour${hours === 1 ? '' : 's'}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes === 1 ? '' : 's'}`);
  
  return parts.join(', ');
}

// Run the example
main();