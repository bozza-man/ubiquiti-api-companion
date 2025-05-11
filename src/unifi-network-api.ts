import axios, { AxiosInstance } from 'axios';
import https from 'https';
import { EventEmitter } from 'events';

export interface UniFiNetworkConfig {
  controller: string;
  username: string;
  password: string;
  site?: string;
  port?: number;
  sslVerify?: boolean;
  debug?: boolean;
}

export class UniFiNetworkAPI extends EventEmitter {
  private config: UniFiNetworkConfig;
  private axiosInstance: AxiosInstance;
  private cookieJar: string[] = [];
  private currentSite: string;
  private isLoggedIn: boolean = false;
  
  /**
   * Creates a new UniFi Network API client
   * @param config Configuration options
   */
  constructor(config: UniFiNetworkConfig) {
    super();
    
    this.config = {
      site: 'default',
      port: 443,
      sslVerify: false,
      debug: false,
      ...config
    };
    
    this.currentSite = this.config.site as string;
    
    // Create Axios instance with appropriate settings
    this.axiosInstance = axios.create({
      baseURL: `${this.config.controller}:${this.config.port}`,
      httpsAgent: new https.Agent({
        rejectUnauthorized: this.config.sslVerify
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    // Add request interceptor to include cookies
    this.axiosInstance.interceptors.request.use((config) => {
      if (this.cookieJar.length > 0) {
        config.headers.Cookie = this.cookieJar.join('; ');
      }
      return config;
    });
    
    // Add response interceptor to capture cookies
    this.axiosInstance.interceptors.response.use((response) => {
      const setCookie = response.headers['set-cookie'];
      if (setCookie) {
        this.cookieJar = setCookie.map((cookie: string) => cookie.split(';')[0]);
      }
      return response;
    });
  }
  
  /**
   * Log in to the UniFi Network Controller
   */
  async login(): Promise<boolean> {
    try {
      const response = await this.axiosInstance.post('/api/login', {
        username: this.config.username,
        password: this.config.password
      });
      
      this.isLoggedIn = response.status === 200;
      
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
   * Log out from the UniFi Network Controller
   */
  async logout(): Promise<boolean> {
    if (!this.isLoggedIn) {
      return true;
    }
    
    try {
      const response = await this.axiosInstance.post('/api/logout');
      this.isLoggedIn = false;
      this.cookieJar = [];
      
      return response.status === 200;
    } catch (error) {
      if (this.config.debug) {
        console.error('Logout failed:', error);
      }
      throw new Error(`Logout failed: ${error}`);
    }
  }
  
  /**
   * Get all devices
   */
  async getDevices(): Promise<any[]> {
    this.ensureLoggedIn();
    
    try {
      const response = await this.axiosInstance.get(`/api/s/${this.currentSite}/stat/device`);
      return response.data.data || [];
    } catch (error) {
      if (this.config.debug) {
        console.error('Failed to get devices:', error);
      }
      throw new Error(`Failed to get devices: ${error}`);
    }
  }
  
  /**
   * Get all clients
   */
  async getClients(): Promise<any[]> {
    this.ensureLoggedIn();
    
    try {
      const response = await this.axiosInstance.get(`/api/s/${this.currentSite}/stat/sta`);
      return response.data.data || [];
    } catch (error) {
      if (this.config.debug) {
        console.error('Failed to get clients:', error);
      }
      throw new Error(`Failed to get clients: ${error}`);
    }
  }
  
  /**
   * Get site statistics
   */
  async getSiteStats(): Promise<any> {
    this.ensureLoggedIn();
    
    try {
      const response = await this.axiosInstance.get(`/api/s/${this.currentSite}/stat/site`);
      return response.data.data[0] || {};
    } catch (error) {
      if (this.config.debug) {
        console.error('Failed to get site stats:', error);
      }
      throw new Error(`Failed to get site stats: ${error}`);
    }
  }
  
  /**
   * Block a client by MAC address
   */
  async blockClient(mac: string): Promise<boolean> {
    this.ensureLoggedIn();
    
    try {
      const response = await this.axiosInstance.post(`/api/s/${this.currentSite}/cmd/stamgr`, {
        cmd: 'block-sta',
        mac
      });
      
      return response.status === 200;
    } catch (error) {
      if (this.config.debug) {
        console.error(`Failed to block client ${mac}:`, error);
      }
      throw new Error(`Failed to block client ${mac}: ${error}`);
    }
  }
  
  /**
   * Unblock a client by MAC address
   */
  async unblockClient(mac: string): Promise<boolean> {
    this.ensureLoggedIn();
    
    try {
      const response = await this.axiosInstance.post(`/api/s/${this.currentSite}/cmd/stamgr`, {
        cmd: 'unblock-sta',
        mac
      });
      
      return response.status === 200;
    } catch (error) {
      if (this.config.debug) {
        console.error(`Failed to unblock client ${mac}:`, error);
      }
      throw new Error(`Failed to unblock client ${mac}: ${error}`);
    }
  }
  
  /**
   * Set the current site
   */
  setSite(site: string): void {
    this.currentSite = site;
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

export default UniFiNetworkAPI;