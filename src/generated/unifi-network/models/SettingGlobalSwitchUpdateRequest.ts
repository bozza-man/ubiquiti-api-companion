/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SettingGlobalSwitchAclL3Isolation } from './SettingGlobalSwitchAclL3Isolation';

export type SettingGlobalSwitchUpdateRequest = {
    _id?: string;
    acl_device_isolation?: Array<string>;
    acl_l3_isolation?: Array<SettingGlobalSwitchAclL3Isolation>;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    dhcp_snoop?: boolean;
    dot1x_fallback_networkconf_id?: string;
    dot1x_portctrl_enabled?: boolean;
    flood_known_protocols?: boolean;
    flowctrl_enabled?: boolean;
    forward_unknown_mcast_router_ports?: boolean;
    jumboframe_enabled?: boolean;
    key?: string;
    radiusprofile_id?: string;
    site_id?: string;
    stp_version?: string;
    switch_exclusions?: Array<string>;
};

