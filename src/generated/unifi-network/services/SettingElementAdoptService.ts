/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingElementAdoptResponse } from '../models/SettingElementAdoptResponse';
import type { SettingElementAdoptUpdateRequest } from '../models/SettingElementAdoptUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingElementAdoptService {

    /**
     * @returns SettingElementAdoptResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingElementAdopt({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingElementAdoptResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/element_adopt',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingElementAdoptResponse Created
     * @throws ApiError
     */
    public static updateSettingElementAdopt({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingElementAdoptUpdateRequest,
    }): CancelablePromise<SettingElementAdoptResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/element_adopt',
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
