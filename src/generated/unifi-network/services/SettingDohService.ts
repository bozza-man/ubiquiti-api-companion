/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingDohResponse } from '../models/SettingDohResponse';
import type { SettingDohUpdateRequest } from '../models/SettingDohUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingDohService {

    /**
     * @returns SettingDohResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingDoh({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingDohResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/doh',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingDohResponse Created
     * @throws ApiError
     */
    public static updateSettingDoh({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingDohUpdateRequest,
    }): CancelablePromise<SettingDohResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/doh',
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
