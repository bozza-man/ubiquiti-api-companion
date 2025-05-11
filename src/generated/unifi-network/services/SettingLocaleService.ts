/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingLocaleResponse } from '../models/SettingLocaleResponse';
import type { SettingLocaleUpdateRequest } from '../models/SettingLocaleUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingLocaleService {

    /**
     * @returns SettingLocaleResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingLocale({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingLocaleResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/locale',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingLocaleResponse Created
     * @throws ApiError
     */
    public static updateSettingLocale({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingLocaleUpdateRequest,
    }): CancelablePromise<SettingLocaleResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/locale',
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
