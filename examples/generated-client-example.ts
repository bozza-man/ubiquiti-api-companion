/**
 * Example usage of the generated API clients
 */

// Import from our generated OpenAPI clients
import { OpenAPI as UnifiNetworkOpenAPI } from '../src/generated/unifi-network';
import { DefaultService as UnifiNetworkService } from '../src/generated/unifi-network/services/DefaultService';

import { OpenAPI as UnifiProtectOpenAPI } from '../src/generated/unifi-protect';
import { AuthenticationService, BootstrapService, CamerasService } from '../src/generated/unifi-protect/services/DefaultService';

async function main() {
  try {
    // Set up UniFi Network API client configuration
    UnifiNetworkOpenAPI.BASE = 'https://unifi.example.com';
    UnifiNetworkOpenAPI.WITH_CREDENTIALS = true;
    
    // Login to UniFi Network Controller
    console.log('Logging in to UniFi Network controller...');
    await UnifiNetworkService.networkLogin({
      requestBody: {
        username: 'admin',
        password: 'password'
      }
    });
    
    // Get devices (using the generated client)
    console.log('Getting devices...');
    const devicesResponse = await UnifiNetworkService.networkGetDevices({
      site: 'default'
    });
    
    if (devicesResponse.data) {
      console.log(`Found ${devicesResponse.data.length} devices:`);
      devicesResponse.data.forEach(device => {
        console.log(`- ${device.name || device.mac} (${device.mac})`);
        console.log(`  Model: ${device.model}`);
        console.log(`  Status: ${device.state === 1 ? 'Online' : 'Offline'}`);
      });
    }
    
    // Set up UniFi Protect API client configuration
    UnifiProtectOpenAPI.BASE = 'https://protect.example.com';
    UnifiProtectOpenAPI.WITH_CREDENTIALS = true;
    
    // Login to UniFi Protect
    console.log('\nLogging in to UniFi Protect NVR...');
    await AuthenticationService.protectLogin({
      requestBody: {
        username: 'admin',
        password: 'password'
      }
    });
    
    // Get bootstrap data
    console.log('Getting bootstrap data...');
    const bootstrap = await BootstrapService.protectGetBootstrap();
    
    if (bootstrap.cameras) {
      console.log(`Found ${bootstrap.cameras.length} cameras:`);
      bootstrap.cameras.forEach(camera => {
        console.log(`- ${camera.name} (${camera.mac})`);
        console.log(`  Model: ${camera.type}`);
        console.log(`  Status: ${camera.state}`);
      });
    }
    
    // Logout from both systems
    console.log('\nLogging out...');
    await UnifiNetworkService.networkLogout();
    await AuthenticationService.protectLogout();
    
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the example
main();