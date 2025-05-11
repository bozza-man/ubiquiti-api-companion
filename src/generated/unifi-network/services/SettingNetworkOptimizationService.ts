/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingNetworkOptimizationResponse } from '../models/SettingNetworkOptimizationResponse';
import type { SettingNetworkOptimizationUpdateRequest } from '../models/SettingNetworkOptimizationUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingNetworkOptimizationService {

    /**
     * @returns SettingNetworkOptimizationResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingNetworkOptimization({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingNetworkOptimizationResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/network_optimization',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingNetworkOptimizationResponse Created
     * @throws ApiError
     */
    public static updateSettingNetworkOptimization({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingNetworkOptimizationUpdateRequest,
    }): CancelablePromise<SettingNetworkOptimizationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/network_optimization',
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
