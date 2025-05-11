/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingSuperEventsResponse } from '../models/SettingSuperEventsResponse';
import type { SettingSuperEventsUpdateRequest } from '../models/SettingSuperEventsUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingSuperEventsService {

    /**
     * @returns SettingSuperEventsResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingSuperEvents({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingSuperEventsResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/super_events',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingSuperEventsResponse Created
     * @throws ApiError
     */
    public static updateSettingSuperEvents({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingSuperEventsUpdateRequest,
    }): CancelablePromise<SettingSuperEventsResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/super_events',
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
