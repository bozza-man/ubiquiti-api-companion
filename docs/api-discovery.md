# API Discovery and Monitoring

The Ubiquiti API Companion includes powerful tools for automatically discovering and monitoring Ubiquiti device APIs. These tools help keep the OpenAPI specifications up-to-date as firmware evolves.

## API Analyzer

The API Analyzer connects to a Ubiquiti device, probes various endpoints, and analyzes the responses to update our OpenAPI specifications.

### Usage

```bash
node scripts/analyze-device-api.js --type [network|protect] --host [hostname] --username [username] --password [password] [--port port] [--debug true|false]
```

Or using npm:

```bash
npm run analyze-device -- --type network --host unifi.example.com --username admin --password secret
```

### Parameters

- `--type`: Device type (`network` or `protect`)
- `--host`: Hostname or IP address of the device
- `--username`: Username for authentication
- `--password`: Password for authentication
- `--port`: (Optional) Port number (default: 443)
- `--debug`: (Optional) Enable debug output (default: false)

### How It Works

1. The analyzer connects to the specified device and authenticates
2. It probes a series of predefined endpoints for the device type
3. It analyzes the structure of successful responses
4. It updates the OpenAPI specification with any new or modified endpoints
5. Properties and data types are inferred from the response data

## Firmware Monitor

The Firmware Monitor continuously checks your Ubiquiti devices for new firmware releases and triggers API analysis when new versions are detected.

### Usage

```bash
node scripts/firmware-monitor.js --config [path/to/config.json]
```

Or using npm:

```bash
npm run monitor-firmware -- --config scripts/config.json
```

### Configuration

The firmware monitor uses a JSON configuration file with the following structure:

```json
{
  "devices": [
    {
      "type": "network",
      "host": "unifi.example.com",
      "username": "admin",
      "password": "your-password-here",
      "port": "443"
    },
    {
      "type": "protect",
      "host": "protect.example.com",
      "username": "admin",
      "password": "your-password-here",
      "port": "443"
    }
  ],
  "checkIntervalMinutes": 1440,
  "knownFirmware": {
    "network": ["6.5.55", "7.0.23"],
    "protect": ["2.2.12", "2.3.8"]
  }
}
```

You can initialize a sample configuration file with:

```bash
npm run init-config
```

### How It Works

1. The monitor checks each device for its current firmware version
2. If a new firmware version is detected (not in `knownFirmware`):
   - It adds the version to the list of known firmware
   - It triggers the API analyzer to update the OpenAPI specifications
3. It repeats this process at the interval specified in `checkIntervalMinutes`

### Running as a Service

For continuous monitoring, you can run the firmware monitor as a system service:

#### Using PM2

```bash
npm install -g pm2
pm2 start scripts/firmware-monitor.js -- --config scripts/config.json
pm2 save
pm2 startup
```

#### Using systemd (Linux)

Create a file at `/etc/systemd/system/ubiquiti-api-monitor.service`:

```
[Unit]
Description=Ubiquiti API Firmware Monitor
After=network.target

[Service]
WorkingDirectory=/path/to/ubiquiti-api-companion
ExecStart=/usr/bin/node scripts/firmware-monitor.js --config scripts/config.json
Restart=always
User=yourusername
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

Then enable and start the service:

```bash
sudo systemctl enable ubiquiti-api-monitor
sudo systemctl start ubiquiti-api-monitor
```

## Security Considerations

- Store your configuration file securely, as it contains device credentials
- Consider using environment variables or a secrets manager for sensitive information
- Use dedicated read-only accounts for API monitoring when possible
- Ensure your monitoring system has appropriate network access controls