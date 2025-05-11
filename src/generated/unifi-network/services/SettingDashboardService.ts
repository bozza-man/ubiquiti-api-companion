/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingDashboardResponse } from '../models/SettingDashboardResponse';
import type { SettingDashboardUpdateRequest } from '../models/SettingDashboardUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingDashboardService {

    /**
     * @returns SettingDashboardResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingDashboard({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingDashboardResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/dashboard',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingDashboardResponse Created
     * @throws ApiError
     */
    public static updateSettingDashboard({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingDashboardUpdateRequest,
    }): CancelablePromise<SettingDashboardResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/dashboard',
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
