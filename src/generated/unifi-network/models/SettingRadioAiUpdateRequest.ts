/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SettingRadioAiChannelsBlacklist } from './SettingRadioAiChannelsBlacklist';
import type { SettingRadioAiRadiosConfiguration } from './SettingRadioAiRadiosConfiguration';

export type SettingRadioAiUpdateRequest = {
    _id?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    auto_adjust_channels_to_country?: boolean;
    auto_channel_presets_type?: string;
    channels_6e?: Array<number>;
    channels_blacklist?: Array<SettingRadioAiChannelsBlacklist>;
    channels_na?: Array<number>;
    channels_ng?: Array<number>;
    cron_expr?: string;
    default?: boolean;
    enabled?: boolean;
    exclude_devices?: Array<string>;
    ht_modes_na?: Array<number>;
    ht_modes_ng?: Array<number>;
    key?: string;
    optimize?: Array<string>;
    radios?: Array<string>;
    radios_configuration?: Array<SettingRadioAiRadiosConfiguration>;
    setting_preference?: string;
    site_id?: string;
    useXY?: boolean;
};

