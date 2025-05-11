/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NetworkClient = {
    /**
     * Client ID
     */
    _id?: string;
    /**
     * MAC address
     */
    mac?: string;
    /**
     * IP address
     */
    ip?: string;
    /**
     * Client name
     */
    name?: string;
    /**
     * Client hostname
     */
    hostname?: string;
    /**
     * Whether the client is wired
     */
    is_wired?: boolean;
    /**
     * Whether the client is a guest
     */
    is_guest?: boolean;
    /**
     * OUI (Organization Unique Identifier)
     */
    oui?: string;
    /**
     * Whether the client is blocked
     */
    blocked?: boolean;
    /**
     * Last seen timestamp
     */
    last_seen?: number;
    /**
     * Received bytes
     */
    rx_bytes?: number;
    /**
     * Transmitted bytes
     */
    tx_bytes?: number;
};

