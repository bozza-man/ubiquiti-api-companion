/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FirmwareStats } from './FirmwareStats';
import type { StorageStats } from './StorageStats';
import type { VideoStats } from './VideoStats';
import type { WiFiStats } from './WiFiStats';

export type CameraStats = {
    /**
     * Received bytes
     */
    rxBytes?: number;
    /**
     * Transmitted bytes
     */
    txBytes?: number;
    wifi?: WiFiStats;
    video?: VideoStats;
    storage?: StorageStats;
    firmware?: FirmwareStats;
};

