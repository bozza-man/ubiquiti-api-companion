/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProtectBootstrap } from '../models/ProtectBootstrap';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProtectBootstrapService {

    /**
     * Get bootstrap data
     * This endpoint returns all the data needed to initialize the UniFi Protect interface.
     * It includes information about cameras, events, users, and system settings.
     *
     * @returns ProtectBootstrap Bootstrap data
     * @throws ApiError
     */
    public static protectGetBootstrap(): CancelablePromise<ProtectBootstrap> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/protect/proxy/protect/api/bootstrap',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
