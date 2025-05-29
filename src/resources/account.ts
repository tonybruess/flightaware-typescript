// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Account extends APIResource {
  /**
   * Returns usage statistics for your AeroAPI account. Can be filtered by key and
   * date range. Data per account is updated every 10 minutes.
   */
  getUsage(
    query: AccountGetUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountGetUsageResponse> {
    return this._client.get('/account/usage', { query, ...options });
  }
}

export interface AccountGetUsageResponse {
  /**
   * Resource specific information
   */
  resource_details: Array<AccountGetUsageResponse.ResourceDetail>;

  /**
   * Total number of calls across all resources
   */
  total_calls: number;

  /**
   * Total cost for all calls made across all resources. Does not include volume
   * discounting
   */
  total_cost: number;

  /**
   * Total cost across all resources including volume discounting. (Total cost minus
   * discount)
   */
  total_discount_cost: number;

  /**
   * Total number of failed calls across all resources
   */
  total_failed_calls: number;

  /**
   * Total number of pages retrieved across all resources
   */
  total_pages: number;

  /**
   * Total number of successful calls across all resources
   */
  total_successful_calls: number;
}

export namespace AccountGetUsageResponse {
  export interface ResourceDetail {
    /**
     * Total number of failed calls for this resource
     */
    failed_resource_calls: number;

    /**
     * Total number of pages retrieved for this resource
     */
    num_pages: number;

    /**
     * Name of the operation
     */
    operation: string;

    /**
     * Total cost for all calls made to this resource. Does not include volume
     * discounting
     */
    resource_cost: number;

    /**
     * Total number of successful calls for this resource
     */
    successful_resource_calls: number;

    /**
     * Total number of calls made for this resource
     */
    total_resource_calls: number;
  }
}

export interface AccountGetUsageParams {
  /**
   * Flag to determine which key(s) to get usage data for. If False, data for the key
   * that made the request will be retrieved. If True, data for all keys associated
   * with the account will be retrieved.
   */
  all_keys?: boolean;

  /**
   * Datetime or date to end gathering usage data from. If left blank, will default
   * to the current time. Has a maximum value of 1 year into the past If using date
   * instead of datetime, then the time will default to 00:00:00Z. Thus, the next
   * day's date should be specified if one day of data is desired when using date
   * instead of datetime.
   */
  end?: unknown;

  /**
   * Datetime or date to start gathering usage data from. If left blank, will default
   * to 1 year into the past. Has a maximum value of 1 year into the past. If using
   * date instead of datetime, then the time will default to 00:00:00Z. Thus, the
   * next day's date should be specified if one day of data is desired when using
   * date instead of datetime.
   */
  start?: unknown;
}

export declare namespace Account {
  export {
    type AccountGetUsageResponse as AccountGetUsageResponse,
    type AccountGetUsageParams as AccountGetUsageParams,
  };
}
