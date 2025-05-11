/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Hotspot2ConfCreateRequest } from '../models/Hotspot2ConfCreateRequest';
import type { Hotspot2ConfResponse } from '../models/Hotspot2ConfResponse';
import type { Hotspot2ConfUpdateRequest } from '../models/Hotspot2ConfUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class Hotspot2ConfService {

    /**
     * @returns Hotspot2ConfResponse OK
     * @throws ApiError
     */
    public static listHotspot2Conf({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<Hotspot2ConfResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/hotspot2conf',
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
    public static createHotspot2Conf({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: Hotspot2ConfCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/hotspot2conf',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Hotspot2ConfResponse OK
     * @throws ApiError
     */
    public static deleteHotspot2Conf({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<Hotspot2ConfResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/hotspot2conf/{id}',
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
     * @returns Hotspot2ConfResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getHotspot2Conf({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<Hotspot2ConfResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/hotspot2conf/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns Hotspot2ConfResponse Created
     * @throws ApiError
     */
    public static updateHotspot2Conf({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: Hotspot2ConfUpdateRequest,
    }): CancelablePromise<Hotspot2ConfResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/hotspot2conf/{id}',
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
