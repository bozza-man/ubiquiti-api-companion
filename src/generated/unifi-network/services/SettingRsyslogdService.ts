/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingRsyslogdResponse } from '../models/SettingRsyslogdResponse';
import type { SettingRsyslogdUpdateRequest } from '../models/SettingRsyslogdUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingRsyslogdService {

    /**
     * @returns SettingRsyslogdResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingRsyslogd({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingRsyslogdResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/rsyslogd',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingRsyslogdResponse Created
     * @throws ApiError
     */
    public static updateSettingRsyslogd({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingRsyslogdUpdateRequest,
    }): CancelablePromise<SettingRsyslogdResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/rsyslogd',
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
