/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Event } from '../models/Event';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventsService {

    /**
     * Get events
     * Get events from the UniFi Protect system
     * @returns Event List of events
     * @throws ApiError
     */
    public static getEvents({
        start,
        end,
        type,
        limit,
    }: {
        /**
         * Start time in milliseconds since epoch
         */
        start?: number,
        /**
         * End time in milliseconds since epoch
         */
        end?: number,
        /**
         * Event type
         */
        type?: 'motion' | 'ring' | 'smartDetectZone',
        /**
         * Maximum number of events to return
         */
        limit?: number,
    }): CancelablePromise<Array<Event>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/proxy/protect/api/events',
            query: {
                'start': start,
                'end': end,
                'type': type,
                'limit': limit,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
