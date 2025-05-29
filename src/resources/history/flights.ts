// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Flights extends APIResource {
  /**
   * Returns historical flight info status summary for a registration, ident, or
   * fa_flight_id. If a fa_flight_id is specified then a maximum of 1 flight is
   * returned, unless the flight has been diverted in which case both the original
   * flight and any diversions will be returned with a duplicate fa_flight_id. If a
   * registraion or ident is specified then `start` and `end` date parameters must be
   * specified. The span between `start` and `end` can be up to 7 days. No more than
   * 40 pages may be requested at once. Data is available from now back to 2011-01-01
   * 00:00:00 UTC.
   *
   * The field `inbound_fa_flight_id` will not be populated by this resource.
   *
   * @example
   * ```ts
   * const flight = await client.history.flights.retrieve(
   *   'ident',
   * );
   * ```
   */
  retrieve(
    ident: string,
    query: FlightRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlightRetrieveResponse> {
    return this._client.get(path`/history/flights/${ident}`, { query, ...options });
  }

  /**
   * Returns a historical flight's track as a base64-encoded image. Image can contain
   * a variety of additional data layers beyond just the track. Data is available
   * from now back to 2011-01-01T00:00:00Z.
   *
   * @example
   * ```ts
   * const response = await client.history.flights.map('id');
   * ```
   */
  map(
    id: string,
    query: FlightMapParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlightMapResponse> {
    return this._client.get(path`/history/flights/${id}/map`, { query, ...options });
  }

  /**
   * Returns information about a historical flight's filed route including
   * coordinates, names, and types of fixes along the route. Not all flight routes
   * can be successfully decoded by this endpoint, particularly if the flight is not
   * entirely within the continental U.S. airspace, since this function only has
   * access to navaids within that area. If data on a waypoint is missing then the
   * type will be listed as "UNKNOWN". Data is available from now back to
   * 2011-01-01T00:00:00Z.
   *
   * @example
   * ```ts
   * const response = await client.history.flights.route('id');
   * ```
   */
  route(id: string, options?: RequestOptions): APIPromise<FlightRouteResponse> {
    return this._client.get(path`/history/flights/${id}/route`, options);
  }

  /**
   * Returns the track for a historical flight as an array of positions. By default
   * only actual airborne positions will be included. Surface positions (aircraft
   * taxi movement at supported airports) can be requested using the query-string
   * parameters. Data is available from now back to 2011-01-01T00:00:00Z.
   *
   * @example
   * ```ts
   * const response = await client.history.flights.track('id');
   * ```
   */
  track(
    id: string,
    query: FlightTrackParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlightTrackResponse> {
    return this._client.get(path`/history/flights/${id}/track`, { query, ...options });
  }
}

export interface FlightRetrieveResponse {
  flights: Array<FlightRetrieveResponse.Flight>;

  /**
   * Object containing links to related resources.
   */
  links: FlightRetrieveResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;
}

export namespace FlightRetrieveResponse {
  export interface Flight {
    /**
     * Actual gate arrival time.
     */
    actual_in: string | null;

    /**
     * Actual runway departure time.
     */
    actual_off: string | null;

    /**
     * Actual runway arrival time.
     */
    actual_on: string | null;

    /**
     * Actual gate departure time.
     */
    actual_out: string | null;

    /**
     * Aircraft type will generally be ICAO code, but IATA code will be given when the
     * ICAO code is not known.
     */
    aircraft_type: string | null;

    /**
     * Arrival delay (in seconds) based on either actual or estimated gate arrival
     * time. If gate time is unavailable then based on runway arrival time. A negative
     * value indicates the flight is early.
     */
    arrival_delay: number | null;

    /**
     * The ident of the flight for Air Traffic Control purposes, when known and
     * different than ident.
     */
    atc_ident: string | null;

    /**
     * Baggage claim location at the destination airport.
     */
    baggage_claim: string | null;

    /**
     * Flag indicating whether this flight is blocked from public viewing.
     */
    blocked: boolean;

    /**
     * Flag indicating that the flight is no longer being tracked by FlightAware. There
     * are a number of reasons this could happen including cancellation by the airline,
     * but that will not always be the case.
     */
    cancelled: boolean;

    /**
     * List of any ICAO codeshares operating on this flight.
     */
    codeshares: Array<string> | null;

    /**
     * Departure delay (in seconds) based on either actual or estimated gate departure
     * time. If gate time is unavailable then based on runway departure time. A
     * negative value indicates the flight is early.
     */
    departure_delay: number | null;

    /**
     * Information for this flight's destination airport.
     */
    destination: Flight.Destination | null;

    /**
     * Flag indicating whether this flight was diverted.
     */
    diverted: boolean;

    /**
     * Estimated gate arrival time.
     */
    estimated_in: string | null;

    /**
     * Estimated runway departure time.
     */
    estimated_off: string | null;

    /**
     * Estimated runway arrival time.
     */
    estimated_on: string | null;

    /**
     * Estimated gate departure time.
     */
    estimated_out: string | null;

    /**
     * Unique identifier assigned by FlightAware for this specific flight. If the
     * flight is diverted, the new leg of the flight will have a duplicate
     * fa_flight_id.
     */
    fa_flight_id: string;

    /**
     * Filed IFR airspeed (knots).
     */
    filed_airspeed: number | null;

    /**
     * Filed IFR altitude (100s of feet).
     */
    filed_altitude: number | null;

    /**
     * Runway-to-runway filed duration (seconds).
     */
    filed_ete: number | null;

    /**
     * Bare flight number of the flight.
     */
    flight_number: string | null;

    /**
     * Indicates if Foresight predictions are available for AeroAPI /foresight
     * endpoints.
     */
    foresight_predictions_available: boolean;

    /**
     * Arrival gate at the destination airport.
     */
    gate_destination: string | null;

    /**
     * Departure gate at the origin airport.
     */
    gate_origin: string | null;

    /**
     * Either the operator code followed by the flight number for the flight (for
     * commercial flights) or the aircraft's registration (for general aviation).
     */
    ident: string;

    /**
     * Unique identifier assigned by FlightAware for the previous flight of the
     * aircraft serving this flight.
     */
    inbound_fa_flight_id: string | null;

    /**
     * ICAO code, if exists, of the operator of the flight, otherwise the IATA code
     */
    operator: string | null;

    /**
     * IATA code of the operator of the flight.
     */
    operator_iata: string | null;

    /**
     * Information for this flight's origin airport.
     */
    origin: Flight.Origin | null;

    /**
     * Flag indicating that this flight does not have a flight plan, schedule, or other
     * indication of intent available.
     */
    position_only: boolean;

    /**
     * The percent completion of a flight, based on runway departure/arrival. Null for
     * en route position-only flights.
     */
    progress_percent: number | null;

    /**
     * Aircraft registration (tail number) of the aircraft, when known.
     */
    registration: string | null;

    /**
     * The textual description of the flight's route.
     */
    route: string | null;

    /**
     * Planned flight distance (statute miles) based on the filed route. May vary from
     * actual flown distance.
     */
    route_distance: number | null;

    /**
     * Scheduled gate arrival time.
     */
    scheduled_in: string | null;

    /**
     * Scheduled runway departure time.
     */
    scheduled_off: string | null;

    /**
     * Scheduled runway arrival time.
     */
    scheduled_on: string | null;

    /**
     * Scheduled gate departure time.
     */
    scheduled_out: string | null;

    /**
     * Number of seats in the business class cabin.
     */
    seats_cabin_business: number | null;

    /**
     * Number of seats in the coach cabin.
     */
    seats_cabin_coach: number | null;

    /**
     * Number of seats in the first class cabin.
     */
    seats_cabin_first: number | null;

    /**
     * Human-readable summary of flight status.
     */
    status: string;

    /**
     * Arrival terminal at the destination airport.
     */
    terminal_destination: string | null;

    /**
     * Departure terminal at the origin airport.
     */
    terminal_origin: string | null;

    /**
     * Whether this is a commercial or general aviation flight.
     */
    type: 'General_Aviation' | 'Airline';

    /**
     * Actual departure runway at origin, when known
     */
    actual_runway_off?: string | null;

    /**
     * Actual arrival runway at destination, when known
     */
    actual_runway_on?: string | null;

    /**
     * List of any IATA codeshares operating on this flight.
     */
    codeshares_iata?: Array<string> | null;

    /**
     * The IATA operator code followed by the flight number for the flight (for
     * commercial flights)
     */
    ident_iata?: string | null;

    /**
     * The ICAO operator code followed by the flight number for the flight (for
     * commercial flights)
     */
    ident_icao?: string | null;

    /**
     * ICAO code of the operator of the flight.
     */
    operator_icao?: string | null;
  }

  export namespace Flight {
    /**
     * Information for this flight's destination airport.
     */
    export interface Destination {
      /**
       * The URL to more information about the airport. Will be null for position-only
       * flights.
       */
      airport_info_url: string | null;

      /**
       * ICAO/IATA/LID code or string indicating the location where tracking of the
       * flight began/ended for position-only flights.
       */
      code: string | null;

      /**
       * Closest city to the airport
       */
      city?: string | null;

      /**
       * IATA code
       */
      code_iata?: string | null;

      /**
       * ICAO code
       */
      code_icao?: string | null;

      /**
       * LID code
       */
      code_lid?: string | null;

      /**
       * Common name of airport
       */
      name?: string | null;

      /**
       * Applicable timezone for the airport, in the TZ database format
       */
      timezone?: string | null;
    }

    /**
     * Information for this flight's origin airport.
     */
    export interface Origin {
      /**
       * The URL to more information about the airport. Will be null for position-only
       * flights.
       */
      airport_info_url: string | null;

      /**
       * ICAO/IATA/LID code or string indicating the location where tracking of the
       * flight began/ended for position-only flights.
       */
      code: string | null;

      /**
       * Closest city to the airport
       */
      city?: string | null;

      /**
       * IATA code
       */
      code_iata?: string | null;

      /**
       * ICAO code
       */
      code_icao?: string | null;

      /**
       * LID code
       */
      code_lid?: string | null;

      /**
       * Common name of airport
       */
      name?: string | null;

      /**
       * Applicable timezone for the airport, in the TZ database format
       */
      timezone?: string | null;
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

export interface FlightMapResponse {
  map: string;
}

export interface FlightRouteResponse {
  fixes: Array<FlightRouteResponse.Fix>;

  route_distance: string | null;
}

export namespace FlightRouteResponse {
  export interface Fix {
    /**
     * Distance from origin airport stated in statue miles, nautical miles or
     * kilometers depending on FlightAware Account Display Options
     */
    distance_from_origin: number | null;

    /**
     * Distance from the last point on Route stated in statue miles, nautical miles or
     * kilometers depending on FlightAware Account Display Options
     */
    distance_this_leg: number | null;

    /**
     * Distance to destination airport stated in statue miles, nautical miles or
     * kilometers depending on FlightAware Account Display Options
     */
    distance_to_destination: number | null;

    /**
     * Longitude of the fix in decimal degrees
     */
    latitude: number | null;

    /**
     * Longitude of the fix in decimal degrees
     */
    longitude: number | null;

    /**
     * Name of the route fix
     */
    name: string;

    /**
     * Course in integer degrees from the current point to the next relative to true
     * north
     */
    outbound_course: number | null;

    /**
     * Type of the fix (ie Waypoint / Reporting Point)
     */
    type: string;
  }
}

export interface FlightTrackResponse {
  /**
   * Distance (in miles) flown as of the latest position point. Will include distance
   * from the origin airport to the first position point. If the flight has been
   * completed, will include the distance from the last position point to the
   * destination airport. If surface positions are enabled, will include distance
   * traveled on the ground as part of the flight track and actual distance flown
   * calculations. Estimated positions present in the flight track will not be part
   * of the actual distance flown calculation.
   */
  actual_distance?: number | null;

  positions?: Array<FlightTrackResponse.Position | null>;
}

export namespace FlightTrackResponse {
  export interface Position {
    /**
     * Aircraft altitude in hundreds of feet
     */
    altitude: number;

    /**
     * C when the aircraft is climbing, D when descending, and - when the altitude is
     * being maintained.
     */
    altitude_change: 'C' | 'D' | '-';

    /**
     * Unique identifier assigned by FlightAware to the flight with this position. This
     * field is only populated by the `/flights/search/positions` (in other cases, the
     * user will have already specified the fa_flight_id).
     */
    fa_flight_id: string | null;

    /**
     * Most recent groundspeed (knots)
     */
    groundspeed: number;

    /**
     * Aircraft heading in degrees (0-360)
     */
    heading: number | null;

    /**
     * Most recent latitude position
     */
    latitude: number;

    /**
     * Most recent longitude position
     */
    longitude: number;

    /**
     * Time that position was received
     */
    timestamp: string;

    /**
     * P=projected, O=oceanic, Z=radar, A=ADS-B, M=multilateration, D=datalink,
     * X=surface and near surface (ADS-B and ASDE-X), S=space-based
     */
    update_type: 'P' | 'O' | 'Z' | 'A' | 'M' | 'D' | 'X' | 'S' | null;
  }
}

export interface FlightRetrieveParams {
  /**
   * Opaque value used to get the next batch of data from a paged collection.
   */
  cursor?: string;

  /**
   * The ending date range for flight results, comparing against flights'
   * `scheduled_out` field (or `scheduled_off` if `scheduled_out` is missing). The
   * format is ISO8601 date or datetime, and the bound is exclusive. Specified end
   * date must occur after 2011-01-01 00:00:00 UTC and cannot be in the future. If
   * using date instead of datetime, the time will default to 00:00:00Z.
   */
  end?: unknown;

  /**
   * Type of ident provided in the ident parameter. By default, the passed ident is
   * interpreted as a registration if possible. This parameter can force the ident to
   * be interpreted as a designator instead.
   */
  ident_type?: 'designator' | 'registration' | 'fa_flight_id';

  /**
   * Maximum number of pages to fetch. This is an upper limit and not a guarantee of
   * how many pages will be returned.
   */
  max_pages?: number;

  /**
   * The starting date range for flight results, comparing against flights'
   * `scheduled_out` field (or `scheduled_off` if `scheduled_out` is missing). The
   * format is ISO8601 date or datetime, and the bound is inclusive. Specified start
   * date must occur on or after 2011-01-01 00:00:00 UTC and cannot be in the future.
   * If using date instead of datetime, the time will default to 00:00:00Z.
   */
  start?: unknown;
}

export interface FlightMapParams {
  /**
   * Whether to force zoom area to ensure origin/destination airports are visible.
   * Enabling this flag forcefully enables the show_airports flag as well.
   */
  airports_expand_view?: boolean;

  /**
   * Manually specify the zoom area of the map using custom bounds. Should be a list
   * of 4 coordinates representing the top, right, bottom, and left sides of the area
   * (in that order).
   */
  bounding_box?: Array<number>;

  /**
   * Height of requested image (pixels)
   */
  height?: number;

  /**
   * List of map layers to disable
   */
  layer_off?: Array<
    | 'US Cities'
    | 'european country boundaries'
    | 'asia country boundaries'
    | 'major airports'
    | 'country boundaries'
    | 'US state boundaries'
    | 'water'
    | 'US major roads'
    | 'radar'
    | 'track'
    | 'flights'
    | 'airports'
  >;

  /**
   * List of map layers to enable
   */
  layer_on?: Array<
    | 'US Cities'
    | 'european country boundaries'
    | 'asia country boundaries'
    | 'major airports'
    | 'country boundaries'
    | 'US state boundaries'
    | 'water'
    | 'US major roads'
    | 'radar'
    | 'track'
    | 'flights'
    | 'airports'
  >;

  /**
   * Whether to show the origin/destination airports for the flight as labeled points
   * on the map.
   */
  show_airports?: boolean;

  /**
   * Whether a textual caption containing the ident, type, heading, altitude, origin,
   * and destination should be displayed by the flight's position.
   */
  show_data_block?: boolean;

  /**
   * Width of requested image (pixels)
   */
  width?: number;
}

export interface FlightTrackParams {
  /**
   * Whether to include estimated positions in the flight track.
   */
  include_estimated_positions?: boolean;

  /**
   * Whether to include surface positions in the flight track and actual_distance
   * computation.
   */
  include_surface_positions?: boolean;
}

export declare namespace Flights {
  export {
    type FlightRetrieveResponse as FlightRetrieveResponse,
    type FlightMapResponse as FlightMapResponse,
    type FlightRouteResponse as FlightRouteResponse,
    type FlightTrackResponse as FlightTrackResponse,
    type FlightRetrieveParams as FlightRetrieveParams,
    type FlightMapParams as FlightMapParams,
    type FlightTrackParams as FlightTrackParams,
  };
}
