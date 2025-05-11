/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelPlanApBlacklistedChannels } from './ChannelPlanApBlacklistedChannels';
import type { ChannelPlanCoupling } from './ChannelPlanCoupling';
import type { ChannelPlanRadioTable } from './ChannelPlanRadioTable';
import type { ChannelPlanSatisfactionTable } from './ChannelPlanSatisfactionTable';
import type { ChannelPlanSiteBlacklistedChannels } from './ChannelPlanSiteBlacklistedChannels';

export type ChannelPlan = {
    _id?: string;
    ap_blacklisted_channels?: Array<ChannelPlanApBlacklistedChannels>;
    attr_hidden?: boolean;
    attr_hidden_id?: string;
    attr_no_delete?: boolean;
    attr_no_edit?: boolean;
    conf_source?: string;
    coupling?: Array<ChannelPlanCoupling>;
    date?: string;
    fitness?: number;
    note?: string;
    radio?: string;
    radio_table?: Array<ChannelPlanRadioTable>;
    satisfaction?: number;
    satisfaction_table?: Array<ChannelPlanSatisfactionTable>;
    site_blacklisted_channels?: Array<ChannelPlanSiteBlacklistedChannels>;
    site_id?: string;
};

