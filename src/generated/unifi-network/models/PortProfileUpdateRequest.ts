/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortProfileQOSProfile } from './PortProfileQOSProfile';

export type PortProfileUpdateRequest = {
    _id?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    autoneg?: boolean;
    dot1x_ctrl?: string;
    dot1x_idle_timeout?: number;
    egress_rate_limit_kbps?: number;
    egress_rate_limit_kbps_enabled?: boolean;
    excluded_networkconf_ids?: Array<string>;
    fec_mode?: string;
    forward?: string;
    full_duplex?: boolean;
    isolation?: boolean;
    lldpmed_enabled?: boolean;
    lldpmed_notify_enabled?: boolean;
    multicast_router_networkconf_ids?: Array<string>;
    name?: string;
    native_networkconf_id?: string;
    op_mode?: string;
    poe_mode?: string;
    port_keepalive_enabled?: boolean;
    port_security_enabled?: boolean;
    port_security_mac_address?: Array<string>;
    priority_queue1_level?: number;
    priority_queue2_level?: number;
    priority_queue3_level?: number;
    priority_queue4_level?: number;
    qos_profile?: PortProfileQOSProfile;
    setting_preference?: string;
    site_id?: string;
    speed?: number;
    stormctrl_bcast_enabled?: boolean;
    stormctrl_bcast_level?: number;
    stormctrl_bcast_rate?: number;
    stormctrl_mcast_enabled?: boolean;
    stormctrl_mcast_level?: number;
    stormctrl_mcast_rate?: number;
    stormctrl_type?: string;
    stormctrl_ucast_enabled?: boolean;
    stormctrl_ucast_level?: number;
    stormctrl_ucast_rate?: number;
    stp_port_mode?: boolean;
    tagged_vlan_mgmt?: string;
    voice_networkconf_id?: string;
};

