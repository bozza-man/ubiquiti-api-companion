/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingLcmResponse } from '../models/SettingLcmResponse';
import type { SettingLcmUpdateRequest } from '../models/SettingLcmUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingLcmService {

    /**
     * @returns SettingLcmResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingLcm({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingLcmResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/lcm',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingLcmResponse Created
     * @throws ApiError
     */
    public static updateSettingLcm({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingLcmUpdateRequest,
    }): CancelablePromise<SettingLcmResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/lcm',
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
