/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Camera } from './Camera';
import type { Group } from './Group';
import type { LiveView } from './LiveView';
import type { NVR } from './NVR';
import type { User } from './User';

export type Bootstrap = {
    cameras?: Array<Camera>;
    nvr?: NVR;
    users?: Array<User>;
    groups?: Array<Group>;
    liveviews?: Array<LiveView>;
    /**
     * ID of the last update
     */
    lastUpdateId?: string;
};

