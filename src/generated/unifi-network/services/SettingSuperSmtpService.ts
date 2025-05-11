/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingSuperSmtpResponse } from '../models/SettingSuperSmtpResponse';
import type { SettingSuperSmtpUpdateRequest } from '../models/SettingSuperSmtpUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingSuperSmtpService {

    /**
     * @returns SettingSuperSmtpResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingSuperSmtp({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingSuperSmtpResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/super_smtp',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingSuperSmtpResponse Created
     * @throws ApiError
     */
    public static updateSettingSuperSmtp({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingSuperSmtpUpdateRequest,
    }): CancelablePromise<SettingSuperSmtpResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/super_smtp',
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
