/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelPlanCreateRequest } from '../models/ChannelPlanCreateRequest';
import type { ChannelPlanResponse } from '../models/ChannelPlanResponse';
import type { ChannelPlanUpdateRequest } from '../models/ChannelPlanUpdateRequest';
import type { Meta } from '../models/Meta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChannelPlanService {

    /**
     * @returns ChannelPlanResponse OK
     * @throws ApiError
     */
    public static listChannelPlan({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<ChannelPlanResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/channelplan',
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
    public static createChannelPlan({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: ChannelPlanCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/channelplan',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns ChannelPlanResponse OK
     * @throws ApiError
     */
    public static deleteChannelPlan({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<ChannelPlanResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/channelplan/{id}',
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
     * @returns ChannelPlanResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getChannelPlan({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<ChannelPlanResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/channelplan/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns ChannelPlanResponse Created
     * @throws ApiError
     */
    public static updateChannelPlan({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: ChannelPlanUpdateRequest,
    }): CancelablePromise<ChannelPlanResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/channelplan/{id}',
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
