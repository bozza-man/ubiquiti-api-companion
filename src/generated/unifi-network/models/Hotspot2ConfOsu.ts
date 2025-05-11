/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Hotspot2ConfDescription } from './Hotspot2ConfDescription';
import type { Hotspot2ConfFriendlyName } from './Hotspot2ConfFriendlyName';
import type { Hotspot2ConfIcon } from './Hotspot2ConfIcon';

export type Hotspot2ConfOsu = {
    description?: Array<Hotspot2ConfDescription>;
    friendly_name?: Array<Hotspot2ConfFriendlyName>;
    icon?: Array<Hotspot2ConfIcon>;
    method_oma_dm?: boolean;
    method_soap_xml_spp?: boolean;
    nai?: string;
    nai2?: string;
    operating_class?: string;
    server_uri?: string;
};

