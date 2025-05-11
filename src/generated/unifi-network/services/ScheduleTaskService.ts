/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { ScheduleTaskCreateRequest } from '../models/ScheduleTaskCreateRequest';
import type { ScheduleTaskResponse } from '../models/ScheduleTaskResponse';
import type { ScheduleTaskUpdateRequest } from '../models/ScheduleTaskUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ScheduleTaskService {

    /**
     * @returns ScheduleTaskResponse OK
     * @throws ApiError
     */
    public static listScheduleTask({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<ScheduleTaskResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/scheduletask',
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
    public static createScheduleTask({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: ScheduleTaskCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/scheduletask',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns ScheduleTaskResponse OK
     * @throws ApiError
     */
    public static deleteScheduleTask({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<ScheduleTaskResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/scheduletask/{id}',
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
     * @returns ScheduleTaskResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getScheduleTask({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<ScheduleTaskResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/scheduletask/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns ScheduleTaskResponse Created
     * @throws ApiError
     */
    public static updateScheduleTask({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: ScheduleTaskUpdateRequest,
    }): CancelablePromise<ScheduleTaskResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/scheduletask/{id}',
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
