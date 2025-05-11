/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingSuperMailResponse } from '../models/SettingSuperMailResponse';
import type { SettingSuperMailUpdateRequest } from '../models/SettingSuperMailUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingSuperMailService {

    /**
     * @returns SettingSuperMailResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingSuperMail({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingSuperMailResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/super_mail',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingSuperMailResponse Created
     * @throws ApiError
     */
    public static updateSettingSuperMail({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingSuperMailUpdateRequest,
    }): CancelablePromise<SettingSuperMailResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/super_mail',
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
