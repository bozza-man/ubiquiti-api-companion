/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingEtherLightingResponse } from '../models/SettingEtherLightingResponse';
import type { SettingEtherLightingUpdateRequest } from '../models/SettingEtherLightingUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingEtherLightingService {

    /**
     * @returns SettingEtherLightingResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingEtherLighting({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingEtherLightingResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/ether_lighting',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingEtherLightingResponse Created
     * @throws ApiError
     */
    public static updateSettingEtherLighting({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingEtherLightingUpdateRequest,
    }): CancelablePromise<SettingEtherLightingResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/ether_lighting',
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
