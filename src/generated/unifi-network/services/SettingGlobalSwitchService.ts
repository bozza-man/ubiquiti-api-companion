/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingGlobalSwitchResponse } from '../models/SettingGlobalSwitchResponse';
import type { SettingGlobalSwitchUpdateRequest } from '../models/SettingGlobalSwitchUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingGlobalSwitchService {

    /**
     * @returns SettingGlobalSwitchResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingGlobalSwitch({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingGlobalSwitchResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/global_switch',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingGlobalSwitchResponse Created
     * @throws ApiError
     */
    public static updateSettingGlobalSwitch({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingGlobalSwitchUpdateRequest,
    }): CancelablePromise<SettingGlobalSwitchResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/global_switch',
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
