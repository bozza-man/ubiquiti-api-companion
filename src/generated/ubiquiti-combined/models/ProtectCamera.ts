/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProtectCamera = {
    /**
     * Camera ID
     */
    id?: string;
    /**
     * Camera name
     */
    name?: string;
    /**
     * Camera type
     */
    type?: 'UVC' | 'UBV' | 'MICRO' | 'FLEX' | 'G3' | 'G3_DOME' | 'G3_MICRO' | 'G3_FLEX' | 'G3_INSTANT' | 'G4_DOORBELL' | 'G4_PRO' | 'G4_BULLET';
    /**
     * MAC address
     */
    mac?: string;
    /**
     * IP address
     */
    ip?: string;
    /**
     * Camera state
     */
    state?: 'CONNECTED' | 'DISCONNECTED' | 'PENDING_ADOPTION';
    /**
     * Last seen timestamp
     */
    lastSeen?: number;
    /**
     * Last motion timestamp
     */
    lastMotion?: number;
    /**
     * Last doorbell ring timestamp
     */
    lastRing?: number;
    /**
     * Whether the camera is recording
     */
    isRecording?: boolean;
    /**
     * Whether motion detection is enabled
     */
    isMotionDetectionEnabled?: boolean;
};

