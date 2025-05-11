/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingSnmpResponse } from '../models/SettingSnmpResponse';
import type { SettingSnmpUpdateRequest } from '../models/SettingSnmpUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingSnmpService {

    /**
     * @returns SettingSnmpResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingSnmp({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingSnmpResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/snmp',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingSnmpResponse Created
     * @throws ApiError
     */
    public static updateSettingSnmp({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingSnmpUpdateRequest,
    }): CancelablePromise<SettingSnmpResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/snmp',
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
