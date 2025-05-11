/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HotspotPackageCreateRequest } from '../models/HotspotPackageCreateRequest';
import type { HotspotPackageResponse } from '../models/HotspotPackageResponse';
import type { HotspotPackageUpdateRequest } from '../models/HotspotPackageUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HotspotPackageService {

    /**
     * @returns HotspotPackageResponse OK
     * @throws ApiError
     */
    public static listHotspotPackage({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<HotspotPackageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/hotspotpackage',
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
    public static createHotspotPackage({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: HotspotPackageCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/hotspotpackage',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns HotspotPackageResponse OK
     * @throws ApiError
     */
    public static deleteHotspotPackage({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<HotspotPackageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/hotspotpackage/{id}',
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
     * @returns HotspotPackageResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getHotspotPackage({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<HotspotPackageResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/hotspotpackage/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns HotspotPackageResponse Created
     * @throws ApiError
     */
    public static updateHotspotPackage({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: HotspotPackageUpdateRequest,
    }): CancelablePromise<HotspotPackageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/hotspotpackage/{id}',
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
