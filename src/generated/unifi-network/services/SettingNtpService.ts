/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingNtpResponse } from '../models/SettingNtpResponse';
import type { SettingNtpUpdateRequest } from '../models/SettingNtpUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingNtpService {

    /**
     * @returns SettingNtpResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingNtp({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingNtpResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/ntp',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingNtpResponse Created
     * @throws ApiError
     */
    public static updateSettingNtp({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingNtpUpdateRequest,
    }): CancelablePromise<SettingNtpResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/ntp',
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
