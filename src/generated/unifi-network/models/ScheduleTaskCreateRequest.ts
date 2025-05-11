/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScheduleTaskUpgradeTargets } from './ScheduleTaskUpgradeTargets';

export type ScheduleTaskCreateRequest = {
    _id?: string;
    action?: string;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    cron_expr?: string;
    execute_only_once?: boolean;
    name?: string;
    site_id?: string;
    upgrade_targets?: Array<ScheduleTaskUpgradeTargets>;
};

