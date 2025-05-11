/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortForwardDestinationIPs } from './PortForwardDestinationIPs';

export type PortForwardUpdateRequest = {
    _id?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    destination_ip?: string;
    destination_ips?: Array<PortForwardDestinationIPs>;
    dst_port?: string;
    enabled?: boolean;
    fwd?: string;
    fwd_port?: string;
    log?: boolean;
    name?: string;
    pfwd_interface?: string;
    proto?: string;
    site_id?: string;
    src?: string;
    src_firewall_group_id?: string;
    src_limiting_enabled?: boolean;
    src_limiting_type?: string;
};

