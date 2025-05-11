/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { UserGroupCreateRequest } from '../models/UserGroupCreateRequest';
import type { UserGroupResponse } from '../models/UserGroupResponse';
import type { UserGroupUpdateRequest } from '../models/UserGroupUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserGroupService {

    /**
     * @returns UserGroupResponse OK
     * @throws ApiError
     */
    public static listUserGroup({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<UserGroupResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/usergroup',
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
    public static createUserGroup({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: UserGroupCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/usergroup',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns UserGroupResponse OK
     * @throws ApiError
     */
    public static deleteUserGroup({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<UserGroupResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/usergroup/{id}',
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
     * @returns UserGroupResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getUserGroup({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<UserGroupResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/usergroup/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns UserGroupResponse Created
     * @throws ApiError
     */
    public static updateUserGroup({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: UserGroupUpdateRequest,
    }): CancelablePromise<UserGroupResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/usergroup/{id}',
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
