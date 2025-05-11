/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NetworkDevice } from '../models/NetworkDevice';
import type { NetworkMeta } from '../models/NetworkMeta';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NetworkDevicesService {

    /**
     * Get all devices
     * @returns any List of devices
     * @throws ApiError
     */
    public static networkGetDevices({
        site,
    }: {
        /**
         * Site name
         */
        site: string,
    }): CancelablePromise<{
        meta?: NetworkMeta;
        data?: Array<NetworkDevice>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/network/api/s/{site}/stat/device',
            path: {
                'site': site,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
