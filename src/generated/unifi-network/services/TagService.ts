/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { TagCreateRequest } from '../models/TagCreateRequest';
import type { TagResponse } from '../models/TagResponse';
import type { TagUpdateRequest } from '../models/TagUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagService {

    /**
     * @returns TagResponse OK
     * @throws ApiError
     */
    public static listTag({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<TagResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/tag',
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
    public static createTag({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: TagCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/tag',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns TagResponse OK
     * @throws ApiError
     */
    public static deleteTag({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<TagResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/tag/{id}',
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
     * @returns TagResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getTag({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<TagResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/tag/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns TagResponse Created
     * @throws ApiError
     */
    public static updateTag({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: TagUpdateRequest,
    }): CancelablePromise<TagResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/tag/{id}',
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
