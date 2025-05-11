/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NetworkClient } from '../models/NetworkClient';
import type { NetworkMeta } from '../models/NetworkMeta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NetworkClientsService {

    /**
     * Get all clients
     * @returns any List of clients
     * @throws ApiError
     */
    public static networkGetClients({
        site,
    }: {
        /**
         * Site name
         */
        site: string,
    }): CancelablePromise<{
        meta?: NetworkMeta;
        data?: Array<NetworkClient>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/network/api/s/{site}/stat/sta',
            path: {
                'site': site,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
