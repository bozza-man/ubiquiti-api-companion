/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SettingEtherLightingNetworkOverrides } from './SettingEtherLightingNetworkOverrides';
import type { SettingEtherLightingSpeedOverrides } from './SettingEtherLightingSpeedOverrides';

export type SettingEtherLighting = {
    _id?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    key?: string;
    network_overrides?: Array<SettingEtherLightingNetworkOverrides>;
    site_id?: string;
    speed_overrides?: Array<SettingEtherLightingSpeedOverrides>;
};

