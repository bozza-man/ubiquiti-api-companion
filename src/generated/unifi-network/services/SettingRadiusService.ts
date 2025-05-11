/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingRadiusResponse } from '../models/SettingRadiusResponse';
import type { SettingRadiusUpdateRequest } from '../models/SettingRadiusUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingRadiusService {

    /**
     * @returns SettingRadiusResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingRadius({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingRadiusResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/radius',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingRadiusResponse Created
     * @throws ApiError
     */
    public static updateSettingRadius({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingRadiusUpdateRequest,
    }): CancelablePromise<SettingRadiusResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/radius',
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
