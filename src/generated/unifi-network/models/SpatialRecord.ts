/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpatialRecordDevices } from './SpatialRecordDevices';

export type SpatialRecord = {
    _id?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    devices?: Array<SpatialRecordDevices>;
    name?: string;
    site_id?: string;
};

