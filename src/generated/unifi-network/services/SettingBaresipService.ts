/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingBaresipResponse } from '../models/SettingBaresipResponse';
import type { SettingBaresipUpdateRequest } from '../models/SettingBaresipUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingBaresipService {

    /**
     * @returns SettingBaresipResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingBaresip({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingBaresipResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/baresip',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingBaresipResponse Created
     * @throws ApiError
     */
    public static updateSettingBaresip({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingBaresipUpdateRequest,
    }): CancelablePromise<SettingBaresipResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/baresip',
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
