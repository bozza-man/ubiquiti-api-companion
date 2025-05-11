/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Hotspot2ConfCapab } from './Hotspot2ConfCapab';
import type { Hotspot2ConfCellularNetworkList } from './Hotspot2ConfCellularNetworkList';
import type { Hotspot2ConfFriendlyName } from './Hotspot2ConfFriendlyName';
import type { Hotspot2ConfIcons } from './Hotspot2ConfIcons';
import type { Hotspot2ConfNaiRealmList } from './Hotspot2ConfNaiRealmList';
import type { Hotspot2ConfOsu } from './Hotspot2ConfOsu';
import type { Hotspot2ConfQOSMapDcsp } from './Hotspot2ConfQOSMapDcsp';
import type { Hotspot2ConfQOSMapExceptions } from './Hotspot2ConfQOSMapExceptions';
import type { Hotspot2ConfRoamingConsortiumList } from './Hotspot2ConfRoamingConsortiumList';
import type { Hotspot2ConfVenueName } from './Hotspot2ConfVenueName';

export type Hotspot2ConfCreateRequest = {
    _id?: string;
    anqp_domain_id?: number;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    capab?: Array<Hotspot2ConfCapab>;
    cellular_network_list?: Array<Hotspot2ConfCellularNetworkList>;
    deauth_req_timeout?: number;
    disable_dgaf?: boolean;
    domain_name_list?: Array<string>;
    friendly_name?: Array<Hotspot2ConfFriendlyName>;
    gas_advanced?: boolean;
    gas_comeback_delay?: number;
    gas_frag_limit?: number;
    hessid?: string;
    hessid_used?: boolean;
    icons?: Array<Hotspot2ConfIcons>;
    ipaddr_type_avail_v4?: number;
    ipaddr_type_avail_v6?: number;
    metrics_downlink_load?: number;
    metrics_downlink_load_set?: boolean;
    metrics_downlink_speed?: number;
    metrics_downlink_speed_set?: boolean;
    metrics_info_at_capacity?: boolean;
    metrics_info_link_status?: string;
    metrics_info_symmetric?: boolean;
    metrics_measurement?: number;
    metrics_measurement_set?: boolean;
    metrics_status?: boolean;
    metrics_uplink_load?: number;
    metrics_uplink_load_set?: boolean;
    metrics_uplink_speed?: number;
    metrics_uplink_speed_set?: boolean;
    nai_realm_list?: Array<Hotspot2ConfNaiRealmList>;
    name?: string;
    network_access_asra?: boolean;
    network_access_esr?: boolean;
    network_access_internet?: boolean;
    network_access_uesa?: boolean;
    network_auth_type?: number;
    network_auth_url?: string;
    network_type?: number;
    osu?: Array<Hotspot2ConfOsu>;
    osu_ssid?: string;
    qos_map_dcsp?: Array<Hotspot2ConfQOSMapDcsp>;
    qos_map_exceptions?: Array<Hotspot2ConfQOSMapExceptions>;
    qos_map_status?: boolean;
    roaming_consortium_list?: Array<Hotspot2ConfRoamingConsortiumList>;
    save_timestamp?: string;
    site_id?: string;
    t_c_filename?: string;
    t_c_timestamp?: number;
    venue_group?: number;
    venue_name?: Array<Hotspot2ConfVenueName>;
    venue_type?: number;
};

