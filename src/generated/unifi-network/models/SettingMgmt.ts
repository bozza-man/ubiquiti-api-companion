/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SettingMgmtXSshKeys } from './SettingMgmtXSshKeys';

export type SettingMgmt = {
    _id?: string;
    advanced_feature_enabled?: boolean;
    alert_enabled?: boolean;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    auto_upgrade?: boolean;
    auto_upgrade_hour?: number;
    boot_sound?: boolean;
    debug_tools_enabled?: boolean;
    direct_connect_enabled?: boolean;
    key?: string;
    led_enabled?: boolean;
    outdoor_mode_enabled?: boolean;
    site_id?: string;
    unifi_idp_enabled?: boolean;
    wifiman_enabled?: boolean;
    x_mgmt_key?: string;
    x_ssh_auth_password_enabled?: boolean;
    x_ssh_bind_wildcard?: boolean;
    x_ssh_enabled?: boolean;
    x_ssh_keys?: Array<SettingMgmtXSshKeys>;
    x_ssh_md5passwd?: string;
    x_ssh_password?: string;
    x_ssh_sha512passwd?: string;
    x_ssh_username?: string;
};

