/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Update = {
    /**
     * Version
     */
    version?: string;
    /**
     * Release date
     */
    releaseDate?: number;
    /**
     * Release channel
     */
    releaseChannel?: 'release' | 'beta';
    /**
     * Update type
     */
    updateType?: 'firmware' | 'os';
    /**
     * Summary
     */
    summary?: string;
    /**
     * Notes
     */
    notes?: string;
    /**
     * Firmware URLs
     */
    firmwareUrls?: Array<string>;
};

