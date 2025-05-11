/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingAutoSpeedtestResponse } from '../models/SettingAutoSpeedtestResponse';
import type { SettingAutoSpeedtestUpdateRequest } from '../models/SettingAutoSpeedtestUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingAutoSpeedtestService {

    /**
     * @returns SettingAutoSpeedtestResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingAutoSpeedtest({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingAutoSpeedtestResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/auto_speedtest',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingAutoSpeedtestResponse Created
     * @throws ApiError
     */
    public static updateSettingAutoSpeedtest({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingAutoSpeedtestUpdateRequest,
    }): CancelablePromise<SettingAutoSpeedtestResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/auto_speedtest',
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
