/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingUswResponse } from '../models/SettingUswResponse';
import type { SettingUswUpdateRequest } from '../models/SettingUswUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingUswService {

    /**
     * @returns SettingUswResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingUsw({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingUswResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/usw',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingUswResponse Created
     * @throws ApiError
     */
    public static updateSettingUsw({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingUswUpdateRequest,
    }): CancelablePromise<SettingUswResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/usw',
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
