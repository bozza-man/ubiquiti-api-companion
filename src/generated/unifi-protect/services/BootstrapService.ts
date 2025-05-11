/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Bootstrap } from '../models/Bootstrap';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BootstrapService {

    /**
     * Get bootstrap data
     * This endpoint returns all the data needed to initialize the UniFi Protect interface.
     * It includes information about cameras, events, users, and system settings.
     *
     * @returns Bootstrap Bootstrap data
     * @throws ApiError
     */
    public static getBootstrap(): CancelablePromise<Bootstrap> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/proxy/protect/api/bootstrap',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
