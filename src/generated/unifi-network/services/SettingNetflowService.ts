/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingNetflowResponse } from '../models/SettingNetflowResponse';
import type { SettingNetflowUpdateRequest } from '../models/SettingNetflowUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingNetflowService {

    /**
     * @returns SettingNetflowResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingNetflow({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingNetflowResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/netflow',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingNetflowResponse Created
     * @throws ApiError
     */
    public static updateSettingNetflow({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingNetflowUpdateRequest,
    }): CancelablePromise<SettingNetflowResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/netflow',
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
