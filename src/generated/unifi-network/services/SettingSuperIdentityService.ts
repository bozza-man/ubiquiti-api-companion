/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingSuperIdentityResponse } from '../models/SettingSuperIdentityResponse';
import type { SettingSuperIdentityUpdateRequest } from '../models/SettingSuperIdentityUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingSuperIdentityService {

    /**
     * @returns SettingSuperIdentityResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingSuperIdentity({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingSuperIdentityResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/super_identity',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingSuperIdentityResponse Created
     * @throws ApiError
     */
    public static updateSettingSuperIdentity({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingSuperIdentityUpdateRequest,
    }): CancelablePromise<SettingSuperIdentityResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/super_identity',
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
