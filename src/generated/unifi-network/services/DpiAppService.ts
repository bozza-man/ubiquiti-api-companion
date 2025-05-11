/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DpiAppCreateRequest } from '../models/DpiAppCreateRequest';
import type { DpiAppResponse } from '../models/DpiAppResponse';
import type { DpiAppUpdateRequest } from '../models/DpiAppUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DpiAppService {

    /**
     * @returns DpiAppResponse OK
     * @throws ApiError
     */
    public static listDpiApp({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<DpiAppResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/dpiapp',
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
    public static createDpiApp({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: DpiAppCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/dpiapp',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns DpiAppResponse OK
     * @throws ApiError
     */
    public static deleteDpiApp({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<DpiAppResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/dpiapp/{id}',
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
     * @returns DpiAppResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getDpiApp({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<DpiAppResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/dpiapp/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns DpiAppResponse Created
     * @throws ApiError
     */
    public static updateDpiApp({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: DpiAppUpdateRequest,
    }): CancelablePromise<DpiAppResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/dpiapp/{id}',
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
