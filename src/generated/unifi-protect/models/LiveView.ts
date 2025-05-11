/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LiveViewSlot } from './LiveViewSlot';

export type LiveView = {
    /**
     * Live view ID
     */
    id?: string;
    /**
     * Live view name
     */
    name?: string;
    slots?: Array<LiveViewSlot>;
    /**
     * Owner ID
     */
    owner?: string;
    /**
     * Whether this is the default live view
     */
    isDefault?: boolean;
    /**
     * Whether this is a global live view
     */
    isGlobal?: boolean;
};

