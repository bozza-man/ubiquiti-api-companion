/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingUsgResponse } from '../models/SettingUsgResponse';
import type { SettingUsgUpdateRequest } from '../models/SettingUsgUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingUsgService {

    /**
     * @returns SettingUsgResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingUsg({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingUsgResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/usg',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingUsgResponse Created
     * @throws ApiError
     */
    public static updateSettingUsg({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingUsgUpdateRequest,
    }): CancelablePromise<SettingUsgResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/usg',
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
