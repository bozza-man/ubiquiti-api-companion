/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingMgmtResponse } from '../models/SettingMgmtResponse';
import type { SettingMgmtUpdateRequest } from '../models/SettingMgmtUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingMgmtService {

    /**
     * @returns SettingMgmtResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingMgmt({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingMgmtResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/mgmt',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingMgmtResponse Created
     * @throws ApiError
     */
    public static updateSettingMgmt({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingMgmtUpdateRequest,
    }): CancelablePromise<SettingMgmtResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/mgmt',
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
