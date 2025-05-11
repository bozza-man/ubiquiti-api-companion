/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FirewallRuleCreateRequest } from '../models/FirewallRuleCreateRequest';
import type { FirewallRuleResponse } from '../models/FirewallRuleResponse';
import type { FirewallRuleUpdateRequest } from '../models/FirewallRuleUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FirewallRuleService {

    /**
     * @returns FirewallRuleResponse OK
     * @throws ApiError
     */
    public static listFirewallRule({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<FirewallRuleResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/firewallrule',
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
    public static createFirewallRule({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: FirewallRuleCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/firewallrule',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns FirewallRuleResponse OK
     * @throws ApiError
     */
    public static deleteFirewallRule({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<FirewallRuleResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/firewallrule/{id}',
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
     * @returns FirewallRuleResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getFirewallRule({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<FirewallRuleResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/firewallrule/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns FirewallRuleResponse Created
     * @throws ApiError
     */
    public static updateFirewallRule({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: FirewallRuleUpdateRequest,
    }): CancelablePromise<FirewallRuleResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/firewallrule/{id}',
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
