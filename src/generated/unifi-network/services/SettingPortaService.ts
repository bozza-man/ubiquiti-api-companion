/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingPortaResponse } from '../models/SettingPortaResponse';
import type { SettingPortaUpdateRequest } from '../models/SettingPortaUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingPortaService {

    /**
     * @returns SettingPortaResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingPorta({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingPortaResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/porta',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingPortaResponse Created
     * @throws ApiError
     */
    public static updateSettingPorta({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingPortaUpdateRequest,
    }): CancelablePromise<SettingPortaResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/porta',
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
