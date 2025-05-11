/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingSuperCloudaccessResponse } from '../models/SettingSuperCloudaccessResponse';
import type { SettingSuperCloudaccessUpdateRequest } from '../models/SettingSuperCloudaccessUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingSuperCloudaccessService {

    /**
     * @returns SettingSuperCloudaccessResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingSuperCloudaccess({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingSuperCloudaccessResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/super_cloudaccess',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingSuperCloudaccessResponse Created
     * @throws ApiError
     */
    public static updateSettingSuperCloudaccess({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingSuperCloudaccessUpdateRequest,
    }): CancelablePromise<SettingSuperCloudaccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/super_cloudaccess',
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
