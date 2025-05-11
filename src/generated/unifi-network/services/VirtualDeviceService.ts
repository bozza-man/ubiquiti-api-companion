/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { VirtualDeviceCreateRequest } from '../models/VirtualDeviceCreateRequest';
import type { VirtualDeviceResponse } from '../models/VirtualDeviceResponse';
import type { VirtualDeviceUpdateRequest } from '../models/VirtualDeviceUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VirtualDeviceService {

    /**
     * @returns VirtualDeviceResponse OK
     * @throws ApiError
     */
    public static listVirtualDevice({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<VirtualDeviceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/virtualdevice',
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
     * @returns void
     * @throws ApiError
     */
    public static createVirtualDevice({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: VirtualDeviceCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/virtualdevice',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns VirtualDeviceResponse OK
     * @throws ApiError
     */
    public static deleteVirtualDevice({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<VirtualDeviceResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/virtualdevice/{id}',
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
     * @returns VirtualDeviceResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getVirtualDevice({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<VirtualDeviceResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/virtualdevice/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns VirtualDeviceResponse Created
     * @throws ApiError
     */
    public static updateVirtualDevice({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: VirtualDeviceUpdateRequest,
    }): CancelablePromise<VirtualDeviceResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/virtualdevice/{id}',
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

}
