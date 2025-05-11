/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingSuperSdnResponse } from '../models/SettingSuperSdnResponse';
import type { SettingSuperSdnUpdateRequest } from '../models/SettingSuperSdnUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingSuperSdnService {

    /**
     * @returns SettingSuperSdnResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingSuperSdn({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingSuperSdnResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/super_sdn',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingSuperSdnResponse Created
     * @throws ApiError
     */
    public static updateSettingSuperSdn({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingSuperSdnUpdateRequest,
    }): CancelablePromise<SettingSuperSdnResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/super_sdn',
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
