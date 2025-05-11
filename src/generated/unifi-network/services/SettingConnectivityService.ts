/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingConnectivityResponse } from '../models/SettingConnectivityResponse';
import type { SettingConnectivityUpdateRequest } from '../models/SettingConnectivityUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingConnectivityService {

    /**
     * @returns SettingConnectivityResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingConnectivity({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingConnectivityResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/connectivity',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingConnectivityResponse Created
     * @throws ApiError
     */
    public static updateSettingConnectivity({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingConnectivityUpdateRequest,
    }): CancelablePromise<SettingConnectivityResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/connectivity',
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
