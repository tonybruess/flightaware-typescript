// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Delays extends APIResource {
  /**
   * Returns a list of reason codes for delays at a specific airport. There may be
   * multiple reasons returned if there are multiple types of delays reported at an
   * airport. Note that individual flights may be delayed without there being an
   * airport delay returned by this endpoint.
   *
   * @example
   * ```ts
   * const delay = await client.airports.delays.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DelayRetrieveResponse> {
    return this._client.get(path`/airports/${id}/delays`, options);
  }

  /**
   * Returns a list of airports with delays. There may be multiple reasons returned
   * per airport if there are multiple types of delays reported at an airport. Note
   * that individual flights can be delayed without there being an airport-wide delay
   * returned by this endpoint.
   *
   * @example
   * ```ts
   * const delays = await client.airports.delays.list();
   * ```
   */
  list(
    query: DelayListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DelayListResponse> {
    return this._client.get('/airports/delays', { query, ...options });
  }
}

export interface DelayRetrieveResponse {
  /**
   * ICAO/IATA code of airport
   */
  airport: string;

  /**
   * Category of the largest delay. Some possible values are "weather", "traffic",
   * "equipment", etc.
   */
  category: string;

  /**
   * Color of largest delay. Red when delay is geater than 1 hour. Yellow when delay
   * is between 15 minutes to an hour. Green when delay is between 0 to 15 minutes.
   */
  color: 'red' | 'yellow' | 'green';

  /**
   * Duration of largest delay (seconds). This value is not intended to be presented
   * to users and should only be used for sorting results.
   */
  delay_secs: number;

  /**
   * Reasons for the delay
   */
  reasons: Array<DelayRetrieveResponse.Reason>;
}

export namespace DelayRetrieveResponse {
  export interface Reason {
    /**
     * Category for the delay. Some possible values are "weather", "traffic",
     * "equipment", etc.
     */
    category: string;

    /**
     * Color indicating severity of delay
     */
    color: 'red' | 'yellow' | 'green';

    /**
     * Duration of delay (seconds). This value is not intended to be presented to users
     * and should only be used for sorting results.
     */
    delay_secs: number;

    /**
     * Textual description of the cause of the delay
     */
    reason: string;
  }
}

export interface DelayListResponse {
  delays: Array<DelayListResponse.Delay>;

  /**
   * Object containing links to related resources.
   */
  links: DelayListResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;
}

export namespace DelayListResponse {
  export interface Delay {
    /**
     * ICAO/IATA code of airport
     */
    airport: string;

    /**
     * Category of the largest delay. Some possible values are "weather", "traffic",
     * "equipment", etc.
     */
    category: string;

    /**
     * Color of largest delay. Red when delay is geater than 1 hour. Yellow when delay
     * is between 15 minutes to an hour. Green when delay is between 0 to 15 minutes.
     */
    color: 'red' | 'yellow' | 'green';

    /**
     * Duration of largest delay (seconds). This value is not intended to be presented
     * to users and should only be used for sorting results.
     */
    delay_secs: number;

    /**
     * Reasons for the delay
     */
    reasons: Array<Delay.Reason>;
  }

  export namespace Delay {
    export interface Reason {
      /**
       * Category for the delay. Some possible values are "weather", "traffic",
       * "equipment", etc.
       */
      category: string;

      /**
       * Color indicating severity of delay
       */
      color: 'red' | 'yellow' | 'green';

      /**
       * Duration of delay (seconds). This value is not intended to be presented to users
       * and should only be used for sorting results.
       */
      delay_secs: number;

      /**
       * Textual description of the cause of the delay
       */
      reason: string;
    }
  }

  /**
   * Object containing links to related resources.
   */
  export interface Links {
    /**
     * A link to the next set of records in a collection.
     */
    next: string;
  }
}

export interface DelayListParams {
  /**
   * Opaque value used to get the next batch of data from a paged collection.
   */
  cursor?: string;

  /**
   * Maximum number of pages to fetch. This is an upper limit and not a guarantee of
   * how many pages will be returned.
   */
  max_pages?: number;
}

export declare namespace Delays {
  export {
    type DelayRetrieveResponse as DelayRetrieveResponse,
    type DelayListResponse as DelayListResponse,
    type DelayListParams as DelayListParams,
  };
}
