/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SpatialRecordCreateRequest } from '../models/SpatialRecordCreateRequest';
import type { SpatialRecordResponse } from '../models/SpatialRecordResponse';
import type { SpatialRecordUpdateRequest } from '../models/SpatialRecordUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SpatialRecordService {

    /**
     * @returns SpatialRecordResponse OK
     * @throws ApiError
     */
    public static listSpatialRecord({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SpatialRecordResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/spatialrecord',
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
    public static createSpatialRecord({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SpatialRecordCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/spatialrecord',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns SpatialRecordResponse OK
     * @throws ApiError
     */
    public static deleteSpatialRecord({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<SpatialRecordResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/spatialrecord/{id}',
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
     * @returns SpatialRecordResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSpatialRecord({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<SpatialRecordResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/spatialrecord/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns SpatialRecordResponse Created
     * @throws ApiError
     */
    public static updateSpatialRecord({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: SpatialRecordUpdateRequest,
    }): CancelablePromise<SpatialRecordResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/spatialrecord/{id}',
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
