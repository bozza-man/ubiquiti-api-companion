/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProtectAuthenticationService {

    /**
     * Log in to the UniFi Protect NVR
     * @returns any Login successful
     * @throws ApiError
     */
    public static protectLogin({
        requestBody,
    }: {
        requestBody: {
            /**
             * Username for the UniFi Protect NVR
             */
            username: string;
            /**
             * Password for the UniFi Protect NVR
             */
            password: string;
        },
    }): CancelablePromise<{
        /**
         * Authentication token
         */
        token?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/protect/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Log out from the UniFi Protect NVR
     * @returns any Logout successful
     * @throws ApiError
     */
    public static protectLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/protect/api/auth/logout',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
