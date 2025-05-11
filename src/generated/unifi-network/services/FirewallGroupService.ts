/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FirewallGroupCreateRequest } from '../models/FirewallGroupCreateRequest';
import type { FirewallGroupResponse } from '../models/FirewallGroupResponse';
import type { FirewallGroupUpdateRequest } from '../models/FirewallGroupUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FirewallGroupService {

    /**
     * @returns FirewallGroupResponse OK
     * @throws ApiError
     */
    public static listFirewallGroup({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<FirewallGroupResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/firewallgroup',
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
    public static createFirewallGroup({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: FirewallGroupCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/firewallgroup',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns FirewallGroupResponse OK
     * @throws ApiError
     */
    public static deleteFirewallGroup({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<FirewallGroupResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/firewallgroup/{id}',
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
     * @returns FirewallGroupResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getFirewallGroup({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<FirewallGroupResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/firewallgroup/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns FirewallGroupResponse Created
     * @throws ApiError
     */
    public static updateFirewallGroup({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: FirewallGroupUpdateRequest,
    }): CancelablePromise<FirewallGroupResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/firewallgroup/{id}',
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
