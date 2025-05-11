/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DynamicDNSCreateRequest } from '../models/DynamicDNSCreateRequest';
import type { DynamicDNSResponse } from '../models/DynamicDNSResponse';
import type { DynamicDNSUpdateRequest } from '../models/DynamicDNSUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DynamicDnsService {

    /**
     * @returns DynamicDNSResponse OK
     * @throws ApiError
     */
    public static listDynamicDns({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<DynamicDNSResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/dynamicdns',
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
    public static createDynamicDns({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: DynamicDNSCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/dynamicdns',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns DynamicDNSResponse OK
     * @throws ApiError
     */
    public static deleteDynamicDns({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<DynamicDNSResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/dynamicdns/{id}',
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
     * @returns DynamicDNSResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getDynamicDns({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<DynamicDNSResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/dynamicdns/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns DynamicDNSResponse Created
     * @throws ApiError
     */
    public static updateDynamicDns({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: DynamicDNSUpdateRequest,
    }): CancelablePromise<DynamicDNSResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/dynamicdns/{id}',
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
