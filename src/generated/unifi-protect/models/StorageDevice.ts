/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StorageDevice = {
    /**
     * Storage device ID
     */
    id?: string;
    /**
     * Storage device name
     */
    name?: string;
    /**
     * Storage device type
     */
    type?: 'hdd' | 'ssd';
    /**
     * Storage device size
     */
    size?: number;
    /**
     * Storage device used space
     */
    used?: number;
    /**
     * Storage device status
     */
    status?: 'normal' | 'warning' | 'error';
    /**
     * Whether this is the main storage device
     */
    isMain?: boolean;
};

