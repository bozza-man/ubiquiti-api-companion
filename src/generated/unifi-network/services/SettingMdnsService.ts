/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingMdnsResponse } from '../models/SettingMdnsResponse';
import type { SettingMdnsUpdateRequest } from '../models/SettingMdnsUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingMdnsService {

    /**
     * @returns SettingMdnsResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingMdns({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingMdnsResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/mdns',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingMdnsResponse Created
     * @throws ApiError
     */
    public static updateSettingMdns({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingMdnsUpdateRequest,
    }): CancelablePromise<SettingMdnsResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/mdns',
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
