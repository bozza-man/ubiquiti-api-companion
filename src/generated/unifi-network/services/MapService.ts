/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MapCreateRequest } from '../models/MapCreateRequest';
import type { MapResponse } from '../models/MapResponse';
import type { MapUpdateRequest } from '../models/MapUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MapService {

    /**
     * @returns MapResponse OK
     * @throws ApiError
     */
    public static listMap({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<MapResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/map',
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
    public static createMap({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: MapCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/map',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns MapResponse OK
     * @throws ApiError
     */
    public static deleteMap({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<MapResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/map/{id}',
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
     * @returns MapResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getMap({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<MapResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/map/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns MapResponse Created
     * @throws ApiError
     */
    public static updateMap({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: MapUpdateRequest,
    }): CancelablePromise<MapResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/map/{id}',
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
