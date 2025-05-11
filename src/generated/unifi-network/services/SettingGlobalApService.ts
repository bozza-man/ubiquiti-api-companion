/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingGlobalApResponse } from '../models/SettingGlobalApResponse';
import type { SettingGlobalApUpdateRequest } from '../models/SettingGlobalApUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingGlobalApService {

    /**
     * @returns SettingGlobalApResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingGlobalAp({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingGlobalApResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/global_ap',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingGlobalApResponse Created
     * @throws ApiError
     */
    public static updateSettingGlobalAp({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingGlobalApUpdateRequest,
    }): CancelablePromise<SettingGlobalApResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/global_ap',
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
