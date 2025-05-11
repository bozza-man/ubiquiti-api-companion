/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SettingIpsAdBlockingConfigurations } from './SettingIpsAdBlockingConfigurations';
import type { SettingIpsDNSFilters } from './SettingIpsDNSFilters';
import type { SettingIpsHoneypot } from './SettingIpsHoneypot';
import type { SettingIpsSuppression } from './SettingIpsSuppression';

export type SettingIpsUpdateRequest = {
    _id?: string;
    ad_blocking_configurations?: Array<SettingIpsAdBlockingConfigurations>;
    ad_blocking_enabled?: boolean;
    advanced_filtering_preference?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    dns_filtering?: boolean;
    dns_filters?: Array<SettingIpsDNSFilters>;
    enabled_categories?: Array<string>;
    enabled_networks?: Array<string>;
    honeypot?: Array<SettingIpsHoneypot>;
    honeypot_enabled?: boolean;
    ips_mode?: string;
    key?: string;
    memory_optimized?: boolean;
    restrict_torrents?: boolean;
    site_id?: string;
    suppression?: SettingIpsSuppression;
};

