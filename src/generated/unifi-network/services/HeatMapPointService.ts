/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HeatMapPointCreateRequest } from '../models/HeatMapPointCreateRequest';
import type { HeatMapPointResponse } from '../models/HeatMapPointResponse';
import type { HeatMapPointUpdateRequest } from '../models/HeatMapPointUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HeatMapPointService {

    /**
     * @returns HeatMapPointResponse OK
     * @throws ApiError
     */
    public static listHeatMapPoint({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<HeatMapPointResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/heatmappoint',
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
    public static createHeatMapPoint({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: HeatMapPointCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/heatmappoint',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns HeatMapPointResponse OK
     * @throws ApiError
     */
    public static deleteHeatMapPoint({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<HeatMapPointResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/heatmappoint/{id}',
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
     * @returns HeatMapPointResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getHeatMapPoint({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<HeatMapPointResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/heatmappoint/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns HeatMapPointResponse Created
     * @throws ApiError
     */
    public static updateHeatMapPoint({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: HeatMapPointUpdateRequest,
    }): CancelablePromise<HeatMapPointResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/heatmappoint/{id}',
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
