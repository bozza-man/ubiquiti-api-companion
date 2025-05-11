/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingGlobalNatResponse } from '../models/SettingGlobalNatResponse';
import type { SettingGlobalNatUpdateRequest } from '../models/SettingGlobalNatUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingGlobalNatService {

    /**
     * @returns SettingGlobalNatResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingGlobalNat({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingGlobalNatResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/global_nat',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingGlobalNatResponse Created
     * @throws ApiError
     */
    public static updateSettingGlobalNat({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingGlobalNatUpdateRequest,
    }): CancelablePromise<SettingGlobalNatResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/global_nat',
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
