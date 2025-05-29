// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DisruptionCounts extends APIResource {
  /**
   * Returns flight cancellation or delay counts in the specified time period for a
   * particular airline or airport.
   *
   * #### Cancellation Counts
   *
   * A cancelled flight will be counted if their `scheduled_out` (or `scheduled_off`
   * if `scheduled_out` is missing) time falls within the specified time period.
   * Cancellation counts are calculated at query time based on airline partner data
   * and only count airline-confirmed cancellations.
   *
   * #### Delay Counts
   *
   * Delays are calculated based on the timezone of the origin airport and per day
   * and are counted based on the specified time period. Delay statistics update
   * cycles are re-calculated every 20 minutes and represent gate arrival delays
   * (estimated or actual) of 15 minutes or more for flights that are not cancelled.
   * If a delayed flight is eventually cancelled, it will be removed from the
   * statistics count in the next update cycle.
   *
   * #### Time Periods
   *
   * When `yesterday`, `today`, `tomorrow`, `plus2days`, `twoDaysAgo`, and `week` are
   * used as the time period, the current day is defined by the user's website
   * timezone setting and starts at 08:00 and ends at 08:00 the next day. For
   * example:
   *
   * - `today` will represent a 24-hour span starting at the current day at 08:00.
   *
   * - `yesterday` will represent a 24-hour span starting at 08:00 the previous day
   *   and ending at today's 08:00.
   *
   * - `tomorrow` will represent a 24-hour span starting at 08:00 the next day and
   *   ending at 08:00 two days from today.
   *
   * - `plus2days` will represent a 24-hour span starting at 08:00 two days from
   *   today and ending at 08:00 three days from today.
   *
   * - `twoDaysAgo` will represent a 24-hour span starting at 08:00 two days ago from
   *   today and ending at 08:00 the previous day.
   *
   * - `week` will represent the current 2 weeks of data indexed to the most recent
   *   Sunday's 08:00 ending at Saturday 08:00, right before 2 weeks from that
   *   Sunday.
   *
   * For `minus2plus12hrs` and `next36hrs`, the time period will be centered at the
   * current time defined by the user's website timezone setting:
   *
   * - `minus2plus12hrs` will start capturing statistics 2 hours ago from the current
   *   time until 12 hours after the current time.
   *
   * - `next36hrs` will span from the current time until 36 hours from the current
   *   time.
   *
   * For delay counts, when using `minus2plus12hrs` and `next36hrs` as the time
   * period, a flight will be counted as delayed within this specified time period if
   * any day encompassed by the time span window, centered around the user's website
   * timezone setting, coincides with the delayed flight's origin airport local
   * timezone day of delay.
   *
   * @example
   * ```ts
   * const response =
   *   await client.disruptionCounts.retrieveEntity('id', {
   *     entity_type: 'origin',
   *   });
   * ```
   */
  retrieveEntity(
    id: string,
    params: DisruptionCountRetrieveEntityParams,
    options?: RequestOptions,
  ): APIPromise<DisruptionCountRetrieveEntityResponse> {
    const { entity_type, ...query } = params;
    return this._client.get(path`/disruption_counts/${entity_type}/${id}`, { query, ...options });
  }

  /**
   * Returns overall flight cancellation or delay counts in the specified time period
   * for either all airlines or all airports.
   *
   * #### Cancellation Counts
   *
   * A cancelled flight will be counted if their `scheduled_out` (or `scheduled_off`
   * if `scheduled_out` is missing) time falls within the specified time period.
   * Cancellation counts are calculated at query time based on airline partner data
   * and only count airline-confirmed cancellations.
   *
   * #### Delay Counts
   *
   * Delays are calculated based on the timezone of the origin airport and per day
   * and are counted based on the specified time period. Delay statistics update
   * cycles are re-calculated every 20 minutes and represent gate arrival delays
   * (estimated or actual) of 15 minutes or more for flights that are not cancelled.
   * If a delayed flight is eventually cancelled, it will be removed from the
   * statistics count in the next update cycle.
   *
   * #### Time Periods
   *
   * When `yesterday`, `today`, `tomorrow`, `plus2days`, `twoDaysAgo`, and `week` are
   * used as the time period, the current day is defined by the user's website
   * timezone setting and starts at 08:00 and ends at 08:00 the next day. For
   * example:
   *
   * - `today` will represent a 24-hour span starting at the current day at 08:00.
   *
   * - `yesterday` will represent a 24-hour span starting at 08:00 the previous day
   *   and ending at today's 08:00.
   *
   * - `tomorrow` will represent a 24-hour span starting at 08:00 the next day and
   *   ending at 08:00 two days from today.
   *
   * - `plus2days` will represent a 24-hour span starting at 08:00 two days from
   *   today and ending at 08:00 three days from today.
   *
   * - `twoDaysAgo` will represent a 24-hour span starting at 08:00 two days ago from
   *   today and ending at 08:00 the previous day.
   *
   * - `week` will represent the current 2 weeks of data indexed to the most recent
   *   Sunday's 08:00 ending at Saturday 08:00, right before 2 weeks from that
   *   Sunday.
   *
   * For `minus2plus12hrs` and `next36hrs`, the time period will be centered at the
   * current time defined by the user's website timezone setting:
   *
   * - `minus2plus12hrs` will start capturing statistics 2 hours ago from the current
   *   time until 12 hours after the current time.
   *
   * - `next36hrs` will span from the current time until 36 hours from the current
   *   time.
   *
   * For delay counts, when using `minus2plus12hrs` and `next36hrs` as the time
   * period, a flight will be counted as delayed within this specified time period if
   * any day encompassed by the time span window, centered around the user's website
   * timezone setting, coincides with the delayed flight's origin airport local
   * timezone day of delay.
   *
   * @example
   * ```ts
   * const response =
   *   await client.disruptionCounts.retrieveGlobal('origin');
   * ```
   */
  retrieveGlobal(
    entityType: 'airline' | 'origin' | 'destination',
    query: DisruptionCountRetrieveGlobalParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DisruptionCountRetrieveGlobalResponse> {
    return this._client.get(path`/disruption_counts/${entityType}`, { query, ...options });
  }
}

export interface DisruptionCountRetrieveEntityResponse {
  /**
   * The number of cancelled flights for this airline or airport.
   */
  cancellations: number;

  /**
   * The number of delayed flights for this airline or airport.
   */
  delays: number;

  /**
   * Code for the airline or airport.
   */
  entity_id: string | null;

  /**
   * The name of the airline or airport.
   */
  entity_name: string | null;

  /**
   * Total number of originally scheduled flights for this airline or airport.
   */
  total: number;
}

export interface DisruptionCountRetrieveGlobalResponse {
  /**
   * Per-entity disruption information.
   */
  entities: Array<DisruptionCountRetrieveGlobalResponse.Entity>;

  /**
   * Object containing links to related resources.
   */
  links: DisruptionCountRetrieveGlobalResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;

  /**
   * Total number of cancelled flights in the US.
   */
  total_cancellations_national: number;

  /**
   * Total number of cancelled flights.
   */
  total_cancellations_worldwide: number;

  /**
   * Total number of delayed flights.
   */
  total_delays_worldwide: number;
}

export namespace DisruptionCountRetrieveGlobalResponse {
  export interface Entity {
    /**
     * The number of cancelled flights for this airline or airport.
     */
    cancellations: number;

    /**
     * The number of delayed flights for this airline or airport.
     */
    delays: number;

    /**
     * Code for the airline or airport.
     */
    entity_id: string | null;

    /**
     * The name of the airline or airport.
     */
    entity_name: string | null;

    /**
     * Total number of originally scheduled flights for this airline or airport.
     */
    total: number;
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

export interface DisruptionCountRetrieveEntityParams {
  /**
   * Path param: The type of entity to get disruption statistics for.
   */
  entity_type: 'airline' | 'origin' | 'destination';

  /**
   * Query param:
   */
  time_period?:
    | 'yesterday'
    | 'today'
    | 'tomorrow'
    | 'plus2days'
    | 'twoDaysAgo'
    | 'minus2plus12hrs'
    | 'next36hrs'
    | 'week';
}

export interface DisruptionCountRetrieveGlobalParams {
  /**
   * Opaque value used to get the next batch of data from a paged collection.
   */
  cursor?: string;

  /**
   * Maximum number of pages to fetch. This is an upper limit and not a guarantee of
   * how many pages will be returned.
   */
  max_pages?: number;

  time_period?:
    | 'yesterday'
    | 'today'
    | 'tomorrow'
    | 'plus2days'
    | 'twoDaysAgo'
    | 'minus2plus12hrs'
    | 'next36hrs'
    | 'week';
}

export declare namespace DisruptionCounts {
  export {
    type DisruptionCountRetrieveEntityResponse as DisruptionCountRetrieveEntityResponse,
    type DisruptionCountRetrieveGlobalResponse as DisruptionCountRetrieveGlobalResponse,
    type DisruptionCountRetrieveEntityParams as DisruptionCountRetrieveEntityParams,
    type DisruptionCountRetrieveGlobalParams as DisruptionCountRetrieveGlobalParams,
  };
}
