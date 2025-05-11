/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AvailableDisk } from './AvailableDisk';
import type { AvailableRaid } from './AvailableRaid';
import type { StorageDevice } from './StorageDevice';

export type Storage = {
    devices?: Array<StorageDevice>;
    availableDisks?: Array<AvailableDisk>;
    availableRaids?: Array<AvailableRaid>;
};

