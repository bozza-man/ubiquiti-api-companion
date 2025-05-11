/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WLANCapab } from './WLANCapab';
import type { WLANCellularNetworkList } from './WLANCellularNetworkList';
import type { WLANFriendlyName } from './WLANFriendlyName';
import type { WLANNaiRealmList } from './WLANNaiRealmList';
import type { WLANRoamingConsortiumList } from './WLANRoamingConsortiumList';
import type { WLANVenueName } from './WLANVenueName';

export type WLANHotspot2 = {
    capab?: Array<WLANCapab>;
    cellular_network_list?: Array<WLANCellularNetworkList>;
    domain_name_list?: Array<string>;
    friendly_name?: Array<WLANFriendlyName>;
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
    nai_realm_list?: Array<WLANNaiRealmList>;
    network_type?: number;
    roaming_consortium_list?: Array<WLANRoamingConsortiumList>;
    venue_group?: number;
    venue_name?: Array<WLANVenueName>;
    venue_type?: number;
};

