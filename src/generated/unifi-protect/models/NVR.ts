/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnalyticsData } from './AnalyticsData';
import type { Ports } from './Ports';
import type { Storage } from './Storage';
import type { Update } from './Update';
import type { WiFiSettings } from './WiFiSettings';

export type NVR = {
    /**
     * NVR ID
     */
    id?: string;
    /**
     * NVR name
     */
    name?: string;
    /**
     * MAC address
     */
    mac?: string;
    /**
     * Hostname
     */
    host?: string;
    /**
     * Software version
     */
    version?: string;
    /**
     * Firmware version
     */
    firmwareVersion?: string;
    /**
     * Hardware revision
     */
    hardwareRevision?: string;
    /**
     * Hardware platform
     */
    hardwarePlatform?: string;
    /**
     * Time format
     */
    timeFormat?: '12h' | '24h';
    /**
     * Timezone
     */
    timezone?: string;
    /**
     * Whether the NVR is adopted
     */
    isAdopted?: boolean;
    /**
     * Whether the NVR is managed
     */
    isManaged?: boolean;
    /**
     * Whether the NVR is set up
     */
    isSetup?: boolean;
    /**
     * Whether the NVR is updating
     */
    isUpdating?: boolean;
    /**
     * Whether the NVR is configured
     */
    isConfigured?: boolean;
    /**
     * Whether automatic backups are enabled
     */
    enableAutomaticBackups?: boolean;
    /**
     * Whether stats reporting is enabled
     */
    enableStatsReporting?: boolean;
    /**
     * Recording retention duration in milliseconds
     */
    recordingRetentionDurationMs?: number;
    availableUpdates?: Array<Update>;
    /**
     * Last update check timestamp
     */
    lastUpdateCheck?: number;
    ports?: Ports;
    /**
     * Up since timestamp
     */
    upSince?: number;
    /**
     * Last seen timestamp
     */
    lastSeen?: number;
    /**
     * Whether the NVR is connected to the cloud
     */
    isConnectedToCloud?: boolean;
    /**
     * Whether the NVR is a station
     */
    isStation?: boolean;
    /**
     * Hosts
     */
    hosts?: Array<string>;
    /**
     * Whether automatic updates are enabled
     */
    enableAutomaticUpdates?: boolean;
    /**
     * Whether auto link is disabled
     */
    disableAutoLink?: boolean;
    storage?: Storage;
    analyticsData?: AnalyticsData;
    wifiSettings?: WiFiSettings;
};

