/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { RADIUSProfileCreateRequest } from '../models/RADIUSProfileCreateRequest';
import type { RADIUSProfileResponse } from '../models/RADIUSProfileResponse';
import type { RADIUSProfileUpdateRequest } from '../models/RADIUSProfileUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RadiusProfileService {

    /**
     * @returns RADIUSProfileResponse OK
     * @throws ApiError
     */
    public static listRadiusProfile({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<RADIUSProfileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/radiusprofile',
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
    public static createRadiusProfile({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: RADIUSProfileCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/radiusprofile',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns RADIUSProfileResponse OK
     * @throws ApiError
     */
    public static deleteRadiusProfile({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<RADIUSProfileResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/radiusprofile/{id}',
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
     * @returns RADIUSProfileResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getRadiusProfile({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<RADIUSProfileResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/radiusprofile/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns RADIUSProfileResponse Created
     * @throws ApiError
     */
    public static updateRadiusProfile({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: RADIUSProfileUpdateRequest,
    }): CancelablePromise<RADIUSProfileResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/radiusprofile/{id}',
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
