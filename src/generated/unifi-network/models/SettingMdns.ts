/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SettingMdnsCustomServices } from './SettingMdnsCustomServices';
import type { SettingMdnsPredefinedServices } from './SettingMdnsPredefinedServices';

export type SettingMdns = {
    _id?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    custom_services?: Array<SettingMdnsCustomServices>;
    key?: string;
    predefined_services?: Array<SettingMdnsPredefinedServices>;
    site_id?: string;
};

