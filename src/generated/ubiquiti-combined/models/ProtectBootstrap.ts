/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProtectCamera } from './ProtectCamera';
import type { ProtectNVR } from './ProtectNVR';
import type { ProtectUser } from './ProtectUser';

export type ProtectBootstrap = {
    cameras?: Array<ProtectCamera>;
    nvr?: ProtectNVR;
    users?: Array<ProtectUser>;
    /**
     * ID of the last update
     */
    lastUpdateId?: string;
};

