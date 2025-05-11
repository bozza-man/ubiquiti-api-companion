/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Event = {
    /**
     * Event ID
     */
    id?: string;
    /**
     * Event type
     */
    type?: 'motion' | 'ring' | 'smartDetectZone';
    /**
     * Camera ID
     */
    camera?: string;
    /**
     * Start timestamp
     */
    start?: number;
    /**
     * End timestamp
     */
    end?: number;
    /**
     * Score
     */
    score?: number;
    /**
     * Thumbnail URL
     */
    thumbnail?: string;
    /**
     * Heatmap URL
     */
    heatmap?: string;
    /**
     * Smart detect types
     */
    smartDetectTypes?: Array<'person' | 'vehicle' | 'package'>;
    /**
     * Smart detect event IDs
     */
    smartDetectEvents?: Array<string>;
};

