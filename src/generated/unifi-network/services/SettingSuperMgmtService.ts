/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingSuperMgmtResponse } from '../models/SettingSuperMgmtResponse';
import type { SettingSuperMgmtUpdateRequest } from '../models/SettingSuperMgmtUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingSuperMgmtService {

    /**
     * @returns SettingSuperMgmtResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingSuperMgmt({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingSuperMgmtResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/super_mgmt',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingSuperMgmtResponse Created
     * @throws ApiError
     */
    public static updateSettingSuperMgmt({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingSuperMgmtUpdateRequest,
    }): CancelablePromise<SettingSuperMgmtResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/super_mgmt',
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
