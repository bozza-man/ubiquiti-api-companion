/**
 * The Ultimate Ubiquiti API Companion
 * A comprehensive API library for all Ubiquiti products
 */

// Export main APIs
export { UniFiNetworkAPI, UniFiNetworkConfig } from './unifi-network-api';
export { UniFiProtectAPI, UniFiProtectConfig } from './unifi-protect-api';

// Export version information
export const VERSION = '0.1.0';

/**
 * Example usage:
 * 
 * ```typescript
 * import { UniFiNetworkAPI } from 'ubiquiti-api-companion';
 * 
 * async function main() {
 *   const api = new UniFiNetworkAPI({
 *     controller: 'https://unifi.example.com',
 *     username: 'admin',
 *     password: 'password'
 *   });
 *   
 *   await api.login();
 *   const devices = await api.getDevices();
 *   console.log(devices);
 * }
 * 
 * main().catch(console.error);
 * ```
 */