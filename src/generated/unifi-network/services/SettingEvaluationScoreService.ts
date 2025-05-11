/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { SettingEvaluationScoreResponse } from '../models/SettingEvaluationScoreResponse';
import type { SettingEvaluationScoreUpdateRequest } from '../models/SettingEvaluationScoreUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingEvaluationScoreService {

    /**
     * @returns SettingEvaluationScoreResponse OK
     * @returns any
     * @throws ApiError
     */
    public static getSettingEvaluationScore({
        siteId,
    }: {
        siteId: string,
    }): CancelablePromise<SettingEvaluationScoreResponse | {
        data?: any[] | null;
        meta?: Meta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/s/{siteId}/get/setting/evaluation_score',
            path: {
                'siteId': siteId,
            },
        });
    }

    /**
     * @returns SettingEvaluationScoreResponse Created
     * @throws ApiError
     */
    public static updateSettingEvaluationScore({
        siteId,
        requestBody,
    }: {
        siteId: string,
        requestBody?: SettingEvaluationScoreUpdateRequest,
    }): CancelablePromise<SettingEvaluationScoreResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/s/{siteId}/set/setting/evaluation_score',
            path: {
                'siteId': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                409: `Conflict`,
                429: `Too Many Requests`,
                500: `Internal Server Error`,
            },
        });
    }

}
