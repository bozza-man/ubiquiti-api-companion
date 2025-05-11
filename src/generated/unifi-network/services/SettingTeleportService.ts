/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingTeleportResponse } from '../models/SettingTeleportResponse';
import type { SettingTeleportUpdateRequest } from '../models/SettingTeleportUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingTeleportService {

    /**
     * @returns SettingTeleportResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingTeleport({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingTeleportResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/teleport',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingTeleportResponse Created
     * @throws ApiError
     */
    public static updateSettingTeleport({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingTeleportUpdateRequest,
    }): CancelablePromise<SettingTeleportResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/teleport',
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
