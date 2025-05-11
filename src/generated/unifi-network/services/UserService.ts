/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { UserCreateRequest } from '../models/UserCreateRequest';
import type { UserResponse } from '../models/UserResponse';
import type { UserUpdateRequest } from '../models/UserUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @returns UserResponse OK
     * @throws ApiError
     */
    public static listUser({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/user',
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
    public static createUser({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: UserCreateRequest,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/s/{siteId}/rest/user',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns UserResponse OK
     * @throws ApiError
     */
    public static deleteUser({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/s/{siteId}/rest/user/{id}',
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
     * @returns UserResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getUser({
        siteId,
        id,
    }: {
        siteId: string,
        id: string,
    }): CancelablePromise<UserResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/rest/user/{id}',
            path: {
                'siteId': siteId,
                'id': id,
            },
        });
    }

    /**
     * @returns UserResponse Created
     * @throws ApiError
     */
    public static updateUser({
        siteId,
        id,
        requestBody,
    }: {
        siteId: string,
        id: string,
        requestBody?: UserUpdateRequest,
    }): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/rest/user/{id}',
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
