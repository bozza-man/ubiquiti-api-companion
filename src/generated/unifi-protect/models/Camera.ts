/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CameraStats } from './CameraStats';
import type { LCDSettings } from './LCDSettings';
import type { LEDSettings } from './LEDSettings';
import type { OSDSettings } from './OSDSettings';
import type { RecordingSettings } from './RecordingSettings';
import type { SmartDetectSettings } from './SmartDetectSettings';
import type { SpeakerSettings } from './SpeakerSettings';
import type { TalkbackSettings } from './TalkbackSettings';

export type Camera = {
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
     * Hostname
     */
    host?: string;
    /**
     * Connection hostname
     */
    connectionHost?: string;
    /**
     * Camera state
     */
    state?: 'CONNECTED' | 'DISCONNECTED' | 'PENDING_ADOPTION';
    /**
     * Hardware revision
     */
    hardwareRevision?: string;
    /**
     * Firmware version
     */
    firmwareVersion?: string;
    /**
     * Whether the camera is adopted
     */
    isAdopted?: boolean;
    /**
     * Whether the camera is managed
     */
    isManaged?: boolean;
    /**
     * Whether the camera is adopted by another system
     */
    isAdoptedByOther?: boolean;
    /**
     * Whether the camera is provisioned
     */
    isProvisioned?: boolean;
    /**
     * Whether the camera is rebooting
     */
    isRebooting?: boolean;
    /**
     * Whether the camera is updating
     */
    isUpdating?: boolean;
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
     * Microphone volume
     */
    micVolume?: number;
    /**
     * Speaker volume
     */
    speakerVolume?: number;
    /**
     * Whether the camera is recording
     */
    isRecording?: boolean;
    /**
     * Whether motion detection is enabled
     */
    isMotionDetectionEnabled?: boolean;
    /**
     * Whether PIR (Passive Infrared) is enabled
     */
    isPirEnabled?: boolean;
    recordingSettings?: RecordingSettings;
    ledSettings?: LEDSettings;
    lcdsSettings?: LCDSettings;
    speakerSettings?: SpeakerSettings;
    osdSettings?: OSDSettings;
    talkbackSettings?: TalkbackSettings;
    smartDetectSettings?: SmartDetectSettings;
    stats?: CameraStats;
};

