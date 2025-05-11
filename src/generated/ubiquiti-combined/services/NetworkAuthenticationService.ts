/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NetworkMeta } from '../models/NetworkMeta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NetworkAuthenticationService {

    /**
     * Log in to the UniFi Network Controller
     * @returns any Login successful
     * @throws ApiError
     */
    public static networkLogin({
        requestBody,
    }: {
        requestBody: {
            /**
             * Username for the UniFi controller
             */
            username: string;
            /**
             * Password for the UniFi controller
             */
            password: string;
        },
    }): CancelablePromise<{
        meta?: NetworkMeta;
        data?: Array<any>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/network/api/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Log out from the UniFi Network Controller
     * @returns any Logout successful
     * @throws ApiError
     */
    public static networkLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/network/api/logout',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
