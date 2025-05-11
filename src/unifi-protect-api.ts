import axios, { AxiosInstance } from 'axios';
import https from 'https';
import WebSocket from 'ws';
import { EventEmitter } from 'events';
import * as zlib from 'zlib';

export interface UniFiProtectConfig {
  nvr: string;
  username: string;
  password: string;
  port?: number;
  sslVerify?: boolean;
  debug?: boolean;
}

interface UpdatePacketHeader {
  packetType: number;
  payloadFormat: number;
  deflated: number;
  unknown: number;
  payloadSize: number;
}

interface UpdateAction {
  action: string;
  id: string;
  modelKey: string;
  newUpdateId: string;
}

export class UniFiProtectAPI extends EventEmitter {
  private config: UniFiProtectConfig;
  private axiosInstance: AxiosInstance;
  private bootstrap: any = null;
  private ws: WebSocket | null = null;
  private isLoggedIn: boolean = false;
  private lastUpdateId: string | null = null;
  
  /**
   * Creates a new UniFi Protect API client
   * @param config Configuration options
   */
  constructor(config: UniFiProtectConfig) {
    super();
    
    this.config = {
      port: 443,
      sslVerify: false,
      debug: false,
      ...config
    };
    
    // Create Axios instance with appropriate settings
    this.axiosInstance = axios.create({
      baseURL: `${this.config.nvr}:${this.config.port}`,
      httpsAgent: new https.Agent({
        rejectUnauthorized: this.config.sslVerify
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
  }
  
  /**
   * Log in to the UniFi Protect controller
   */
  async login(): Promise<boolean> {
    try {
      // UniFi Protect login process
      const loginResponse = await this.axiosInstance.post('/api/auth/login', {
        username: this.config.username,
        password: this.config.password
      });
      
      this.isLoggedIn = loginResponse.status === 200;
      
      if (this.isLoggedIn) {
        // Get bootstrap data
        await this.refreshBootstrap();
      }
      
      if (this.config.debug) {
        console.log('Login successful');
      }
      
      return this.isLoggedIn;
    } catch (error) {
      if (this.config.debug) {
        console.error('Login failed:', error);
      }
      throw new Error(`Login failed: ${error}`);
    }
  }
  
  /**
   * Log out from the UniFi Protect controller
   */
  async logout(): Promise<boolean> {
    if (!this.isLoggedIn) {
      return true;
    }
    
    try {
      const response = await this.axiosInstance.post('/api/auth/logout');
      this.isLoggedIn = false;
      
      // Close WebSocket if connected
      if (this.ws) {
        this.ws.close();
        this.ws = null;
      }
      
      return response.status === 200;
    } catch (error) {
      if (this.config.debug) {
        console.error('Logout failed:', error);
      }
      throw new Error(`Logout failed: ${error}`);
    }
  }
  
  /**
   * Refresh bootstrap data from the controller
   */
  async refreshBootstrap(): Promise<any> {
    this.ensureLoggedIn();
    
    try {
      const response = await this.axiosInstance.get('/proxy/protect/api/bootstrap');
      this.bootstrap = response.data;
      this.lastUpdateId = this.bootstrap.lastUpdateId;
      
      return this.bootstrap;
    } catch (error) {
      if (this.config.debug) {
        console.error('Failed to get bootstrap data:', error);
      }
      throw new Error(`Failed to get bootstrap data: ${error}`);
    }
  }
  
  /**
   * Get all cameras
   */
  getCameras(): any[] {
    if (!this.bootstrap) {
      throw new Error('Bootstrap data not loaded. Call refreshBootstrap() first.');
    }
    
    return this.bootstrap.cameras || [];
  }
  
  /**
   * Get all doorbell devices
   */
  getDoorbells(): any[] {
    if (!this.bootstrap) {
      throw new Error('Bootstrap data not loaded. Call refreshBootstrap() first.');
    }
    
    return (this.bootstrap.cameras || []).filter((camera: any) => camera.type === 'DOORBELL');
  }
  
  /**
   * Connect to the WebSocket for real-time updates
   */
  connectToUpdates(): void {
    if (!this.isLoggedIn || !this.lastUpdateId) {
      throw new Error('Not logged in or bootstrap data not loaded.');
    }
    
    // Close existing connection if any
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    
    const wsUrl = `wss://${this.config.nvr}:${this.config.port}/proxy/protect/ws/updates?lastUpdateId=${this.lastUpdateId}`;
    
    // Create WebSocket with proper configuration
    const wsOptions: WebSocket.ClientOptions = {
      headers: {
        Cookie: typeof this.axiosInstance.defaults.headers.common?.['Cookie'] === 'string'
          ? this.axiosInstance.defaults.headers.common?.['Cookie'] as string
          : ''
      },
      rejectUnauthorized: this.config.sslVerify
    };

    this.ws = new WebSocket(wsUrl, wsOptions);
    
    this.ws.on('open', () => {
      if (this.config.debug) {
        console.log('WebSocket connected');
      }
      this.emit('websocket-open');
    });
    
    this.ws.on('message', (data: Buffer) => {
      try {
        this.handleUpdatePacket(data);
      } catch (error) {
        if (this.config.debug) {
          console.error('Error handling update packet:', error);
        }
      }
    });
    
    this.ws.on('error', (error) => {
      if (this.config.debug) {
        console.error('WebSocket error:', error);
      }
      this.emit('websocket-error', error);
    });
    
    this.ws.on('close', () => {
      if (this.config.debug) {
        console.log('WebSocket closed');
      }
      this.emit('websocket-close');
    });
  }
  
  /**
   * Handle a binary update packet from the WebSocket
   * @param data Binary data from WebSocket
   */
  private handleUpdatePacket(data: Buffer): void {
    let offset = 0;
    
    // Read first header
    const header1 = this.readHeader(data, offset);
    offset += 8;
    
    if (header1.packetType !== 1) {
      if (this.config.debug) {
        console.error('Invalid packet type in first header:', header1.packetType);
      }
      return;
    }
    
    // Read action frame
    let actionData: Buffer;
    if (header1.deflated) {
      actionData = zlib.inflateSync(data.slice(offset, offset + header1.payloadSize));
    } else {
      actionData = data.slice(offset, offset + header1.payloadSize);
    }
    offset += header1.payloadSize;
    
    const action = JSON.parse(actionData.toString('utf8')) as UpdateAction;
    
    // Read second header
    const header2 = this.readHeader(data, offset);
    offset += 8;
    
    if (header2.packetType !== 2) {
      if (this.config.debug) {
        console.error('Invalid packet type in second header:', header2.packetType);
      }
      return;
    }
    
    // Read data frame
    let dataFrame: Buffer;
    if (header2.deflated) {
      dataFrame = zlib.inflateSync(data.slice(offset, offset + header2.payloadSize));
    } else {
      dataFrame = data.slice(offset, offset + header2.payloadSize);
    }
    
    let payload: any;
    
    switch (header2.payloadFormat) {
      case 1: // JSON
        payload = JSON.parse(dataFrame.toString('utf8'));
        break;
      case 2: // UTF8 string
        payload = dataFrame.toString('utf8');
        break;
      case 3: // Buffer
        payload = dataFrame;
        break;
    }
    
    // Update lastUpdateId if present
    if (action.newUpdateId) {
      this.lastUpdateId = action.newUpdateId;
    }
    
    // Handle different types of events
    switch (action.modelKey) {
      case 'camera':
        if (action.action === 'update' && payload.lastMotion) {
          this.emit('motion', action.id, payload);
        } else if (action.action === 'update' && payload.lastRing) {
          this.emit('doorbell', action.id, payload);
        }
        break;
      case 'event':
        if (action.action === 'add') {
          this.emit('event-start', action.id, payload);
        } else if (action.action === 'update') {
          this.emit('event-end', action.id, payload);
        }
        break;
    }
    
    // Emit the raw update
    this.emit('update', action, payload);
  }
  
  /**
   * Read a header from a binary buffer
   * @param buffer Binary buffer
   * @param offset Offset to read from
   */
  private readHeader(buffer: Buffer, offset: number): UpdatePacketHeader {
    return {
      packetType: buffer.readUInt8(offset),
      payloadFormat: buffer.readUInt8(offset + 1),
      deflated: buffer.readUInt8(offset + 2),
      unknown: buffer.readUInt8(offset + 3),
      payloadSize: buffer.readUInt32BE(offset + 4)
    };
  }
  
  /**
   * Check if logged in and throw error if not
   */
  private ensureLoggedIn(): void {
    if (!this.isLoggedIn) {
      throw new Error('Not logged in. Call login() first.');
    }
  }
}

export default UniFiProtectAPI;