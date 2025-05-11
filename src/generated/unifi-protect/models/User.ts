/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type User = {
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
     * Whether notifications are enabled
     */
    enableNotifications?: boolean;
    /**
     * User settings
     */
    settings?: Record<string, any>;
    /**
     * User permissions
     */
    permissions?: Array<string>;
    /**
     * User role
     */
    role?: 'admin' | 'user' | 'view' | 'restricted';
    /**
     * Last login IP
     */
    lastLoginIp?: string;
    /**
     * Last login timestamp
     */
    lastLoginTime?: number;
};

