/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingSuperFwupdateResponse } from '../models/SettingSuperFwupdateResponse';
import type { SettingSuperFwupdateUpdateRequest } from '../models/SettingSuperFwupdateUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingSuperFwupdateService {

    /**
     * @returns SettingSuperFwupdateResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingSuperFwupdate({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingSuperFwupdateResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/super_fwupdate',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingSuperFwupdateResponse Created
     * @throws ApiError
     */
    public static updateSettingSuperFwupdate({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingSuperFwupdateUpdateRequest,
    }): CancelablePromise<SettingSuperFwupdateResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/super_fwupdate',
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
