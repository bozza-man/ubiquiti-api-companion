/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FirewallRuleCreateRequest = {
    _id?: string;
    action?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    dst_address?: string;
    dst_address_ipv6?: string;
    dst_firewallgroup_ids?: Array<string>;
    dst_networkconf_id?: string;
    dst_networkconf_type?: string;
    dst_port?: string;
    enabled?: boolean;
    icmp_typename?: string;
    icmpv6_typename?: string;
    ipsec?: string;
    logging?: boolean;
    name?: string;
    protocol?: string;
    protocol_match_excepted?: boolean;
    protocol_v6?: string;
    rule_index?: number;
    ruleset?: string;
    setting_preference?: string;
    site_id?: string;
    src_address?: string;
    src_address_ipv6?: string;
    src_firewallgroup_ids?: Array<string>;
    src_mac_address?: string;
    src_networkconf_id?: string;
    src_networkconf_type?: string;
    src_port?: string;
    state_established?: boolean;
    state_invalid?: boolean;
    state_new?: boolean;
    state_related?: boolean;
};

