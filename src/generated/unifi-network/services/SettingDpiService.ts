/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingDpiResponse } from '../models/SettingDpiResponse';
import type { SettingDpiUpdateRequest } from '../models/SettingDpiUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingDpiService {

    /**
     * @returns SettingDpiResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingDpi({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingDpiResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/dpi',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingDpiResponse Created
     * @throws ApiError
     */
    public static updateSettingDpi({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingDpiUpdateRequest,
    }): CancelablePromise<SettingDpiResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/dpi',
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
