/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BroadcastGroupCreateRequest } from '../models/BroadcastGroupCreateRequest';
import type { BroadcastGroupResponse } from '../models/BroadcastGroupResponse';
import type { BroadcastGroupUpdateRequest } from '../models/BroadcastGroupUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BroadcastGroupService {

    /**
     * @returns BroadcastGroupResponse OK
     * @throws ApiError
     */
    public static listBroadcastGroup({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<BroadcastGroupResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/broadcastgroup',
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
    public static createBroadcastGroup({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: BroadcastGroupCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/broadcastgroup',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns BroadcastGroupResponse OK
     * @throws ApiError
     */
    public static deleteBroadcastGroup({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<BroadcastGroupResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/broadcastgroup/{id}',
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
     * @returns BroadcastGroupResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getBroadcastGroup({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<BroadcastGroupResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/broadcastgroup/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns BroadcastGroupResponse Created
     * @throws ApiError
     */
    public static updateBroadcastGroup({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: BroadcastGroupUpdateRequest,
    }): CancelablePromise<BroadcastGroupResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/broadcastgroup/{id}',
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
