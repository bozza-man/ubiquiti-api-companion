/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CamerasService {

    /**
     * Get camera snapshot
     * Get a snapshot image from a camera
     * @returns binary Camera snapshot
     * @throws ApiError
     */
    public static getCameraSnapshot({
        id,
    }: {
        /**
         * Camera ID
         */
        id: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/proxy/protect/api/cameras/{id}/snapshot',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Camera not found`,
            },
        });
    }

}
