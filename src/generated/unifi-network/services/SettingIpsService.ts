/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingIpsResponse } from '../models/SettingIpsResponse';
import type { SettingIpsUpdateRequest } from '../models/SettingIpsUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingIpsService {

    /**
     * @returns SettingIpsResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingIps({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingIpsResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/ips',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingIpsResponse Created
     * @throws ApiError
     */
    public static updateSettingIps({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingIpsUpdateRequest,
    }): CancelablePromise<SettingIpsResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/ips',
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
