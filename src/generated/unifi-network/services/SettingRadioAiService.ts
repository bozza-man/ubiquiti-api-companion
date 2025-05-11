/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingRadioAiResponse } from '../models/SettingRadioAiResponse';
import type { SettingRadioAiUpdateRequest } from '../models/SettingRadioAiUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingRadioAiService {

    /**
     * @returns SettingRadioAiResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingRadioAi({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingRadioAiResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/radio_ai',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingRadioAiResponse Created
     * @throws ApiError
     */
    public static updateSettingRadioAi({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingRadioAiUpdateRequest,
    }): CancelablePromise<SettingRadioAiResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/radio_ai',
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
