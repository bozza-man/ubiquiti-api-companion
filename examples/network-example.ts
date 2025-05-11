/**
 * Example usage of the UniFi Network API client
 */

import { UniFiNetworkAPI } from '../src/unifi-network-api';

async function main() {
  try {
    // Create an API instance
    const api = new UniFiNetworkAPI({
      controller: 'https://unifi.example.com',
      username: 'admin',
      password: 'password',
      site: 'default',
      debug: true
    });
    
    // Log in to the controller
    console.log('Logging in to UniFi Network controller...');
    await api.login();
    
    // Get devices
    console.log('Getting devices...');
    const devices = await api.getDevices();
    console.log(`Found ${devices.length} devices:`);
    devices.forEach(device => {
      console.log(`- ${device.name || device.mac} (${device.mac})`);
      console.log(`  Model: ${device.model}`);
      console.log(`  Status: ${device.state === 1 ? 'Online' : 'Offline'}`);
      console.log(`  IP: ${device.ip}`);
    });
    
    // Get clients
    console.log('\nGetting clients...');
    const clients = await api.getClients();
    console.log(`Found ${clients.length} clients:`);
    clients.forEach(client => {
      console.log(`- ${client.name || client.hostname || client.mac} (${client.mac})`);
      console.log(`  IP: ${client.ip}`);
      console.log(`  Type: ${client.is_wired ? 'Wired' : 'Wireless'}`);
      console.log(`  Status: ${client.blocked ? 'Blocked' : 'Active'}`);
    });
    
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