/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingTrafficFlowResponse } from '../models/SettingTrafficFlowResponse';
import type { SettingTrafficFlowUpdateRequest } from '../models/SettingTrafficFlowUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingTrafficFlowService {

    /**
     * @returns SettingTrafficFlowResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingTrafficFlow({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingTrafficFlowResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/traffic_flow',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingTrafficFlowResponse Created
     * @throws ApiError
     */
    public static updateSettingTrafficFlow({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingTrafficFlowUpdateRequest,
    }): CancelablePromise<SettingTrafficFlowResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/traffic_flow',
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
