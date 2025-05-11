/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { WLANGroupCreateRequest } from '../models/WLANGroupCreateRequest';
import type { WLANGroupResponse } from '../models/WLANGroupResponse';
import type { WLANGroupUpdateRequest } from '../models/WLANGroupUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WlanGroupService {

    /**
     * @returns WLANGroupResponse OK
     * @throws ApiError
     */
    public static listWlanGroup({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<WLANGroupResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/wlangroup',
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
    public static createWlanGroup({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: WLANGroupCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/wlangroup',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns WLANGroupResponse OK
     * @throws ApiError
     */
    public static deleteWlanGroup({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<WLANGroupResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/wlangroup/{id}',
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
     * @returns WLANGroupResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getWlanGroup({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<WLANGroupResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/wlangroup/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns WLANGroupResponse Created
     * @throws ApiError
     */
    public static updateWlanGroup({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: WLANGroupUpdateRequest,
    }): CancelablePromise<WLANGroupResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/wlangroup/{id}',
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
