/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingSslInspectionResponse } from '../models/SettingSslInspectionResponse';
import type { SettingSslInspectionUpdateRequest } from '../models/SettingSslInspectionUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingSslInspectionService {

    /**
     * @returns SettingSslInspectionResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingSslInspection({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingSslInspectionResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/ssl_inspection',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingSslInspectionResponse Created
     * @throws ApiError
     */
    public static updateSettingSslInspection({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingSslInspectionUpdateRequest,
    }): CancelablePromise<SettingSslInspectionResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/ssl_inspection',
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
