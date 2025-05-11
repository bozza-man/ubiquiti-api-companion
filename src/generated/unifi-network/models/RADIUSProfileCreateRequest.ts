/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RADIUSProfileAcctServers } from './RADIUSProfileAcctServers';
import type { RADIUSProfileAuthServers } from './RADIUSProfileAuthServers';
import type { RADIUSProfileXCaCrts } from './RADIUSProfileXCaCrts';

export type RADIUSProfileCreateRequest = {
    _id?: string;
    accounting_enabled?: boolean;
    acct_servers?: Array<RADIUSProfileAcctServers>;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    auth_servers?: Array<RADIUSProfileAuthServers>;
    interim_update_enabled?: boolean;
    interim_update_interval?: number;
    name?: string;
    site_id?: string;
    tls_enabled?: boolean;
    use_usg_acct_server?: boolean;
    use_usg_auth_server?: boolean;
    vlan_enabled?: boolean;
    vlan_wlan_mode?: string;
    x_ca_crts?: Array<RADIUSProfileXCaCrts>;
    x_client_crt?: string;
    x_client_crt_filename?: string;
    x_client_private_key?: string;
    x_client_private_key_filename?: string;
    x_client_private_key_password?: string;
};

