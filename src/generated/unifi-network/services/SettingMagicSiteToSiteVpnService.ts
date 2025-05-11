/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingMagicSiteToSiteVpnResponse } from '../models/SettingMagicSiteToSiteVpnResponse';
import type { SettingMagicSiteToSiteVpnUpdateRequest } from '../models/SettingMagicSiteToSiteVpnUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingMagicSiteToSiteVpnService {

    /**
     * @returns SettingMagicSiteToSiteVpnResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingMagicSiteToSiteVpn({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingMagicSiteToSiteVpnResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/magic_site_to_site_vpn',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingMagicSiteToSiteVpnResponse Created
     * @throws ApiError
     */
    public static updateSettingMagicSiteToSiteVpn({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingMagicSiteToSiteVpnUpdateRequest,
    }): CancelablePromise<SettingMagicSiteToSiteVpnResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/magic_site_to_site_vpn',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                409: `Conflict`,
                429: `Too Many Requests`,
                500: `Internal Server Error`,
            },
        });
    }

}
