/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { PortForwardCreateRequest } from '../models/PortForwardCreateRequest';
import type { PortForwardResponse } from '../models/PortForwardResponse';
import type { PortForwardUpdateRequest } from '../models/PortForwardUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PortForwardService {

    /**
     * @returns PortForwardResponse OK
     * @throws ApiError
     */
    public static listPortForward({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<PortForwardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/portforward',
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
    public static createPortForward({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: PortForwardCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/portforward',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns PortForwardResponse OK
     * @throws ApiError
     */
    public static deletePortForward({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<PortForwardResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/portforward/{id}',
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
     * @returns PortForwardResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getPortForward({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<PortForwardResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/portforward/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns PortForwardResponse Created
     * @throws ApiError
     */
    public static updatePortForward({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: PortForwardUpdateRequest,
    }): CancelablePromise<PortForwardResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/portforward/{id}',
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
