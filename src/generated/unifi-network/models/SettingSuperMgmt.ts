/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SettingSuperMgmt = {
    _id?: string;
    analytics_disapproved_for?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    auto_upgrade?: boolean;
    autobackup_cron_expr?: string;
    autobackup_days?: number;
    autobackup_enabled?: boolean;
    autobackup_gcs_bucket?: string;
    autobackup_gcs_certificate_path?: string;
    autobackup_local_path?: string;
    autobackup_max_files?: number;
    autobackup_post_actions?: Array<string>;
    autobackup_timezone?: string;
    backup_to_cloud_enabled?: boolean;
    contact_info_city?: string;
    contact_info_company_name?: string;
    contact_info_country?: string;
    contact_info_full_name?: string;
    contact_info_phone_number?: string;
    contact_info_shipping_address_1?: string;
    contact_info_shipping_address_2?: string;
    contact_info_state?: string;
    contact_info_zip?: string;
    data_retention_setting_preference?: string;
    data_retention_time_in_hours_for_5minutes_scale?: number;
    data_retention_time_in_hours_for_daily_scale?: number;
    data_retention_time_in_hours_for_hourly_scale?: number;
    data_retention_time_in_hours_for_monthly_scale?: number;
    data_retention_time_in_hours_for_others?: number;
    default_site_device_auth_password_alert?: string;
    discoverable?: boolean;
    enable_analytics?: boolean;
    google_maps_api_key?: string;
    image_maps_use_google_engine?: boolean;
    key?: string;
    led_enabled?: boolean;
    live_chat?: string;
    live_updates?: string;
    minimum_usable_hd_space?: number;
    minimum_usable_sd_space?: number;
    multiple_sites_enabled?: boolean;
    override_inform_host?: boolean;
    override_inform_host_location?: string;
    site_id?: string;
    store_enabled?: string;
    time_series_per_client_stats_enabled?: boolean;
    x_ssh_password?: string;
    x_ssh_username?: string;
};

