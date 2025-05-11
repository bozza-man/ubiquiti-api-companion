/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DashboardModules } from './DashboardModules';

export type DashboardCreateRequest = {
    _id?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    controller_version?: string;
    desc?: string;
    is_public?: boolean;
    modules?: Array<DashboardModules>;
    name?: string;
    site_id?: string;
};

