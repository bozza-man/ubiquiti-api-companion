/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { PortProfileCreateRequest } from '../models/PortProfileCreateRequest';
import type { PortProfileResponse } from '../models/PortProfileResponse';
import type { PortProfileUpdateRequest } from '../models/PortProfileUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PortProfileService {

    /**
     * @returns PortProfileResponse OK
     * @throws ApiError
     */
    public static listPortProfile({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<PortProfileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/portconf',
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
    public static createPortProfile({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: PortProfileCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/portconf',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns PortProfileResponse OK
     * @throws ApiError
     */
    public static deletePortProfile({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<PortProfileResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/portconf/{id}',
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
     * @returns PortProfileResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getPortProfile({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<PortProfileResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/portconf/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns PortProfileResponse Created
     * @throws ApiError
     */
    public static updatePortProfile({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: PortProfileUpdateRequest,
    }): CancelablePromise<PortProfileResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/portconf/{id}',
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
