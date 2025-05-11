/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaFileCreateRequest } from '../models/MediaFileCreateRequest';
import type { MediaFileResponse } from '../models/MediaFileResponse';
import type { MediaFileUpdateRequest } from '../models/MediaFileUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MediaFileService {

    /**
     * @returns MediaFileResponse OK
     * @throws ApiError
     */
    public static listMediaFile({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<MediaFileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/mediafile',
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
    public static createMediaFile({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: MediaFileCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/mediafile',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns MediaFileResponse OK
     * @throws ApiError
     */
    public static deleteMediaFile({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<MediaFileResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/mediafile/{id}',
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
     * @returns MediaFileResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getMediaFile({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<MediaFileResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/mediafile/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns MediaFileResponse Created
     * @throws ApiError
     */
    public static updateMediaFile({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: MediaFileUpdateRequest,
    }): CancelablePromise<MediaFileResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/mediafile/{id}',
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
