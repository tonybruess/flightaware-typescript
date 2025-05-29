// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Schedules extends APIResource {
  /**
   * Returns scheduled flights that have been published by airlines. These schedules
   * are available for up to three months in the past as well as one year into the
   * future.
   *
   * @example
   * ```ts
   * const schedule = await client.schedules.retrieve(
   *   {},
   *   { date_start: {} },
   * );
   * ```
   */
  retrieve(
    dateEnd: unknown,
    params: ScheduleRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleRetrieveResponse> {
    const { date_start, ...query } = params;
    return this._client.get(path`/schedules/${date_start}/${dateEnd}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }
}

export interface ScheduleRetrieveResponse {
  /**
   * Object containing links to related resources.
   */
  links: ScheduleRetrieveResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;

  scheduled: Array<ScheduleRetrieveResponse.Scheduled>;
}

export namespace ScheduleRetrieveResponse {
  /**
   * Object containing links to related resources.
   */
  export interface Links {
    /**
     * A link to the next set of records in a collection.
     */
    next: string;
  }

  /**
   * Information for a scheduled flight. All data is sourced from operator's schedule
   * and may not reflect actual flight information (even after the flight has
   * occurred).
   */
  export interface Scheduled {
    /**
     * If ident is a codeshare flight, this is the primary identifier used by the
     * operator
     */
    actual_ident: string | null;

    /**
     * If ident is a codeshare flight, this is the primary identifier used by the
     * operator in IATA format
     */
    actual_ident_iata: string | null;

    /**
     * If ident is a codeshare flight, this is the primary identifier used by the
     * operator in ICAO format
     */
    actual_ident_icao: string | null;

    /**
     * Aircraft type will generally be ICAO code, but IATA code will be given when the
     * ICAO code is not known
     */
    aircraft_type: string;

    /**
     * The destination airport's identifier code
     */
    destination: string;

    /**
     * The destination airport's IATA code
     */
    destination_iata: string | null;

    /**
     * The destination airport's ICAO code
     */
    destination_icao: string | null;

    /**
     * The destination airport's LID
     */
    destination_lid: string | null;

    /**
     * Unique FlightAware ID for flight. Will be null for flights scheduled more than a
     * few days in the future.
     */
    fa_flight_id: string | null;

    /**
     * Flight ident
     */
    ident: string;

    /**
     * Flight ident in IATA format
     */
    ident_iata: string | null;

    /**
     * Flight ident in ICAO format
     */
    ident_icao: string | null;

    /**
     * Meal service offered on the flight
     */
    meal_service: string;

    /**
     * The origin airport's identifier code
     */
    origin: string;

    /**
     * The origin airport's IATA code
     */
    origin_iata: string | null;

    /**
     * The origin airport's ICAO code
     */
    origin_icao: string | null;

    /**
     * The origin airport's LID
     */
    origin_lid: string | null;

    /**
     * Scheduled time of arrival at gate
     */
    scheduled_in: string;

    /**
     * Scheduled time of departure from gate
     */
    scheduled_out: string;

    /**
     * Number of seats in the business class cabin
     */
    seats_cabin_business: number;

    /**
     * Number of seats in the coach class cabin
     */
    seats_cabin_coach: number;

    /**
     * Number of seats in the first class cabin
     */
    seats_cabin_first: number;
  }
}

export interface ScheduleRetrieveParams {
  /**
   * Path param: Datetime or date of earliest scheduled flight departure to return.
   * This must be no earlier than 3 months in the past and cannot be more than 3
   * weeks before date_end. Violating either constraint will result in an error. If
   * using date instead of datetime, then the time will default to 00:00:00Z.
   */
  date_start: unknown;

  /**
   * Query param: Only return flights flown by this carrier. ICAO or IATA carrier
   * codes can be provided.
   */
  airline?: string;

  /**
   * Query param: Opaque value used to get the next batch of data from a paged
   * collection.
   */
  cursor?: string;

  /**
   * Query param: Only return flights with this destination airport. ICAO or IATA
   * airport codes can be provided.
   */
  destination?: string;

  /**
   * Query param: Only return flights with this flight number.
   */
  flight_number?: number;

  /**
   * Query param: Flag indicating whether ticketing codeshares should be returned as
   * well.
   */
  include_codeshares?: boolean;

  /**
   * Query param: Flag indicating whether regional codeshares should be returned as
   * well.
   */
  include_regional?: boolean;

  /**
   * Query param: Maximum number of pages to fetch. This is an upper limit and not a
   * guarantee of how many pages will be returned.
   */
  max_pages?: number;

  /**
   * Query param: Only return flights with this origin airport. ICAO or IATA airport
   * codes can be provided.
   */
  origin?: string;
}

export declare namespace Schedules {
  export {
    type ScheduleRetrieveResponse as ScheduleRetrieveResponse,
    type ScheduleRetrieveParams as ScheduleRetrieveParams,
  };
}
