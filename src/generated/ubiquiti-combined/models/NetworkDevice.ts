/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NetworkDevice = {
    /**
     * Device ID
     */
    _id?: string;
    /**
     * MAC address
     */
    mac?: string;
    /**
     * Device model
     */
    model?: string;
    /**
     * Device name
     */
    name?: string;
    /**
     * IP address
     */
    ip?: string;
    /**
     * Device type
     */
    type?: string;
    /**
     * Whether the device is adopted
     */
    adopted?: boolean;
    /**
     * Device state (1 = connected, 0 = disconnected)
     */
    state?: number;
    /**
     * Uptime in seconds
     */
    uptime?: number;
    /**
     * Firmware version
     */
    version?: string;
    /**
     * Whether the device can be upgraded
     */
    upgradable?: boolean;
};

