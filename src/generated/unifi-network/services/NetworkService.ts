/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { NetworkCreateRequest } from '../models/NetworkCreateRequest';
import type { NetworkResponse } from '../models/NetworkResponse';
import type { NetworkUpdateRequest } from '../models/NetworkUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NetworkService {

    /**
     * @returns NetworkResponse OK
     * @throws ApiError
     */
    public static listNetwork({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<NetworkResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/networkconf',
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
    public static createNetwork({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: NetworkCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/networkconf',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns NetworkResponse OK
     * @throws ApiError
     */
    public static deleteNetwork({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<NetworkResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/networkconf/{id}',
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
     * @returns NetworkResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getNetwork({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<NetworkResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/networkconf/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns NetworkResponse Created
     * @throws ApiError
     */
    public static updateNetwork({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: NetworkUpdateRequest,
    }): CancelablePromise<NetworkResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/networkconf/{id}',
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
