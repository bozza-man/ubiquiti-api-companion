/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DpiGroupCreateRequest } from '../models/DpiGroupCreateRequest';
import type { DpiGroupResponse } from '../models/DpiGroupResponse';
import type { DpiGroupUpdateRequest } from '../models/DpiGroupUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DpiGroupService {

    /**
     * @returns DpiGroupResponse OK
     * @throws ApiError
     */
    public static listDpiGroup({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<DpiGroupResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/dpigroup',
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
    public static createDpiGroup({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: DpiGroupCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/dpigroup',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns DpiGroupResponse OK
     * @throws ApiError
     */
    public static deleteDpiGroup({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<DpiGroupResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/dpigroup/{id}',
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
     * @returns DpiGroupResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getDpiGroup({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<DpiGroupResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/dpigroup/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns DpiGroupResponse Created
     * @throws ApiError
     */
    public static updateDpiGroup({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: DpiGroupUpdateRequest,
    }): CancelablePromise<DpiGroupResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/dpigroup/{id}',
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
