/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProtectUser = {
    /**
     * User ID
     */
    id?: string;
    /**
     * First name
     */
    firstName?: string;
    /**
     * Last name
     */
    lastName?: string;
    /**
     * Email address
     */
    email?: string;
    /**
     * User role
     */
    role?: 'admin' | 'user' | 'view' | 'restricted';
};

