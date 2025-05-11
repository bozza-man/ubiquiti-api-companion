/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DHCPOptionCreateRequest } from '../models/DHCPOptionCreateRequest';
import type { DHCPOptionResponse } from '../models/DHCPOptionResponse';
import type { DHCPOptionUpdateRequest } from '../models/DHCPOptionUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DhcpOptionService {

    /**
     * @returns DHCPOptionResponse OK
     * @throws ApiError
     */
    public static listDhcpOption({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<DHCPOptionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/dhcpoption',
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
    public static createDhcpOption({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: DHCPOptionCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/dhcpoption',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns DHCPOptionResponse OK
     * @throws ApiError
     */
    public static deleteDhcpOption({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<DHCPOptionResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/dhcpoption/{id}',
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
     * @returns DHCPOptionResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getDhcpOption({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<DHCPOptionResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/dhcpoption/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns DHCPOptionResponse Created
     * @throws ApiError
     */
    public static updateDhcpOption({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: DHCPOptionUpdateRequest,
    }): CancelablePromise<DHCPOptionResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/dhcpoption/{id}',
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
