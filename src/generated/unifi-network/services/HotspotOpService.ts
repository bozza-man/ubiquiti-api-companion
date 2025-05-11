/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HotspotOpCreateRequest } from '../models/HotspotOpCreateRequest';
import type { HotspotOpResponse } from '../models/HotspotOpResponse';
import type { HotspotOpUpdateRequest } from '../models/HotspotOpUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HotspotOpService {

    /**
     * @returns HotspotOpResponse OK
     * @throws ApiError
     */
    public static listHotspotOp({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<HotspotOpResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/hotspotop',
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
    public static createHotspotOp({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: HotspotOpCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/hotspotop',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns HotspotOpResponse OK
     * @throws ApiError
     */
    public static deleteHotspotOp({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<HotspotOpResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/hotspotop/{id}',
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
     * @returns HotspotOpResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getHotspotOp({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<HotspotOpResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/hotspotop/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns HotspotOpResponse Created
     * @throws ApiError
     */
    public static updateHotspotOp({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: HotspotOpUpdateRequest,
    }): CancelablePromise<HotspotOpResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/hotspotop/{id}',
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
