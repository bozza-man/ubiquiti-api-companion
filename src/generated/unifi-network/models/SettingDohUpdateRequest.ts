/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SettingDohCustomServers } from './SettingDohCustomServers';

export type SettingDohUpdateRequest = {
    _id?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    custom_servers?: Array<SettingDohCustomServers>;
    key?: string;
    server_names?: Array<string>;
    site_id?: string;
    state?: string;
};

