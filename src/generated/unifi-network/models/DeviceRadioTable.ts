/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeviceRadioIDentifiers } from './DeviceRadioIDentifiers';

export type DeviceRadioTable = {
    antenna_gain?: number;
    antenna_id?: number;
    backup_channel?: string;
    channel?: string;
    channel_optimization_enabled?: boolean;
    dfs?: boolean;
    hard_noise_floor_enabled?: boolean;
    ht?: number;
    loadbalance_enabled?: boolean;
    maxsta?: number;
    min_rssi?: number;
    min_rssi_enabled?: boolean;
    name?: string;
    radio?: string;
    radio_identifiers?: Array<DeviceRadioIDentifiers>;
    sens_level?: number;
    sens_level_enabled?: boolean;
    tx_power?: string;
    tx_power_mode?: string;
    vwire_enabled?: boolean;
};

