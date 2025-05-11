/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AvailableRaid = {
    /**
     * Available RAID ID
     */
    id?: string;
    /**
     * Available RAID name
     */
    name?: string;
    /**
     * Available RAID type
     */
    type?: 'raid0' | 'raid1' | 'raid5' | 'raid10';
    /**
     * Available RAID disk IDs
     */
    disks?: Array<string>;
};

