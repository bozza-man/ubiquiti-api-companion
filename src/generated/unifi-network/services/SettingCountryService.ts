/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingCountryResponse } from '../models/SettingCountryResponse';
import type { SettingCountryUpdateRequest } from '../models/SettingCountryUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingCountryService {

    /**
     * @returns SettingCountryResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingCountry({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingCountryResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/country',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingCountryResponse Created
     * @throws ApiError
     */
    public static updateSettingCountry({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingCountryUpdateRequest,
    }): CancelablePromise<SettingCountryResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/country',
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
