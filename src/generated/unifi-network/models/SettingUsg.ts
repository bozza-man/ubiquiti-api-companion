/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SettingUsgDNSVerification } from './SettingUsgDNSVerification';

export type SettingUsg = {
    _id?: string;
    arp_cache_base_reachable?: number;
    arp_cache_timeout?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    broadcast_ping?: boolean;
    dhcp_relay_agents_packets?: string;
    dhcp_relay_hop_count?: number;
    dhcp_relay_max_size?: number;
    dhcp_relay_port?: number;
    dhcp_relay_server_1?: string;
    dhcp_relay_server_2?: string;
    dhcp_relay_server_3?: string;
    dhcp_relay_server_4?: string;
    dhcp_relay_server_5?: string;
    dhcpd_hostfile_update?: boolean;
    dhcpd_use_dnsmasq?: boolean;
    dns_verification?: SettingUsgDNSVerification;
    dnsmasq_all_servers?: boolean;
    echo_server?: string;
    ftp_module?: boolean;
    geo_ip_filtering_block?: string;
    geo_ip_filtering_countries?: string;
    geo_ip_filtering_enabled?: boolean;
    geo_ip_filtering_traffic_direction?: string;
    gre_module?: boolean;
    h323_module?: boolean;
    icmp_timeout?: number;
    key?: string;
    lldp_enable_all?: boolean;
    mdns_enabled?: boolean;
    mss_clamp?: string;
    mss_clamp_mss?: number;
    offload_accounting?: boolean;
    offload_l2_blocking?: boolean;
    offload_sch?: boolean;
    other_timeout?: number;
    pptp_module?: boolean;
    receive_redirects?: boolean;
    send_redirects?: boolean;
    sip_module?: boolean;
    site_id?: string;
    syn_cookies?: boolean;
    tcp_close_timeout?: number;
    tcp_close_wait_timeout?: number;
    tcp_established_timeout?: number;
    tcp_fin_wait_timeout?: number;
    tcp_last_ack_timeout?: number;
    tcp_syn_recv_timeout?: number;
    tcp_syn_sent_timeout?: number;
    tcp_time_wait_timeout?: number;
    tftp_module?: boolean;
    timeout_setting_preference?: string;
    udp_other_timeout?: number;
    udp_stream_timeout?: number;
    unbind_wan_monitors?: boolean;
    upnp_enabled?: boolean;
    upnp_nat_pmp_enabled?: boolean;
    upnp_secure_mode?: boolean;
    upnp_wan_interface?: string;
};

