/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingGuestAccessResponse } from '../models/SettingGuestAccessResponse';
import type { SettingGuestAccessUpdateRequest } from '../models/SettingGuestAccessUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingGuestAccessService {

    /**
     * @returns SettingGuestAccessResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingGuestAccess({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingGuestAccessResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/guest_access',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingGuestAccessResponse Created
     * @throws ApiError
     */
    public static updateSettingGuestAccess({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingGuestAccessUpdateRequest,
    }): CancelablePromise<SettingGuestAccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/guest_access',
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
