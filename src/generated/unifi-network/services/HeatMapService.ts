/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HeatMapCreateRequest } from '../models/HeatMapCreateRequest';
import type { HeatMapResponse } from '../models/HeatMapResponse';
import type { HeatMapUpdateRequest } from '../models/HeatMapUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HeatMapService {

    /**
     * @returns HeatMapResponse OK
     * @throws ApiError
     */
    public static listHeatMap({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<HeatMapResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/heatmap',
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
    public static createHeatMap({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: HeatMapCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/heatmap',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns HeatMapResponse OK
     * @throws ApiError
     */
    public static deleteHeatMap({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<HeatMapResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/heatmap/{id}',
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
     * @returns HeatMapResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getHeatMap({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<HeatMapResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/heatmap/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns HeatMapResponse Created
     * @throws ApiError
     */
    public static updateHeatMap({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: HeatMapUpdateRequest,
    }): CancelablePromise<HeatMapResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/heatmap/{id}',
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
