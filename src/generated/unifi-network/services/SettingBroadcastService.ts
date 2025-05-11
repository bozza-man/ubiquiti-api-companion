/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingBroadcastResponse } from '../models/SettingBroadcastResponse';
import type { SettingBroadcastUpdateRequest } from '../models/SettingBroadcastUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingBroadcastService {

    /**
     * @returns SettingBroadcastResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingBroadcast({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingBroadcastResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/broadcast',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingBroadcastResponse Created
     * @throws ApiError
     */
    public static updateSettingBroadcast({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingBroadcastUpdateRequest,
    }): CancelablePromise<SettingBroadcastResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/broadcast',
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
