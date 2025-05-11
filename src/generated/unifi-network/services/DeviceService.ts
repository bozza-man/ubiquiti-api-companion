/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeviceCreateRequest } from '../models/DeviceCreateRequest';
import type { DeviceResponse } from '../models/DeviceResponse';
import type { DeviceUpdateRequest } from '../models/DeviceUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DeviceService {

    /**
     * @returns void
     * @throws ApiError
     */
    public static createDevice({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: DeviceCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/device',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns DeviceResponse OK
     * @throws ApiError
     */
    public static deleteDevice({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<DeviceResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/device/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
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

    /**
     * @returns DeviceResponse Created
     * @throws ApiError
     */
    public static updateDevice({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: DeviceUpdateRequest,
    }): CancelablePromise<DeviceResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/device/{id}',
            path: {
                'siteId': siteId,
                'id': id,
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

    /**
     * @returns DeviceResponse OK
     * @throws ApiError
     */
    public static listDevice({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<DeviceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/stat/device',
            path: {
                'siteId': siteId,
            },
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

    /**
     * @returns DeviceResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getDevice({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<DeviceResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/stat/device/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

}
