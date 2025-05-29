// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SearchAPI from './search';
import {
  Search,
  SearchAdvancedSearchParams,
  SearchAdvancedSearchResponse,
  SearchCountParams,
  SearchCountResponse,
  SearchFindPositionsParams,
  SearchFindPositionsResponse,
  SearchPerformParams,
  SearchPerformResponse,
} from './search';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Flights extends APIResource {
  search: SearchAPI.Search = new SearchAPI.Search(this._client);

  /**
   * Returns the flight info status summary for a registration, ident, or
   * fa_flight_id. If a fa_flight_id is specified then a maximum of 1 flight is
   * returned, unless the flight has been diverted in which case both the original
   * flight and any diversions will be returned with a duplicate fa_flight_id. If a
   * registration or ident is specified, approximately 14 days of recent and
   * scheduled flight information is returned, ordered by `scheduled_out` (or
   * `scheduled_off` if `scheduled_out` is missing) descending. Alternately, specify
   * a start and end parameter to find your flight(s) of interest, including up to 10
   * days of flight history.
   *
   * @example
   * ```ts
   * const flight = await client.flights.retrieve('ident');
   * ```
   */
  retrieve(
    ident: string,
    query: FlightRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlightRetrieveResponse> {
    return this._client.get(path`/flights/${ident}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * When the ident parameter is a code that could map to multiple other codes, this
   * endpoint returns an array of information about all the possible codes. An
   * optional ident type and country code can be provided to refine ambiguous idents
   * to a single result. The ident type should either be designator or registration
   * to describe the ident being passed in. The country code should represent a
   * country the operator of the flight operates within.
   *
   * @example
   * ```ts
   * const response = await client.flights.getCanonicalIdent(
   *   'ident',
   * );
   * ```
   */
  getCanonicalIdent(
    ident: string,
    query: FlightGetCanonicalIdentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlightGetCanonicalIdentResponse> {
    return this._client.get(path`/flights/${ident}/canonical`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Returns the latest position for a flight
   *
   * @example
   * ```ts
   * const response = await client.flights.getCurrentPosition(
   *   'id',
   * );
   * ```
   */
  getCurrentPosition(id: string, options?: RequestOptions): APIPromise<FlightGetCurrentPositionResponse> {
    return this._client.get(path`/flights/${id}/position`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Returns information about a flight's filed route including coordinates, names,
   * and types of fixes along the route. Not all flight routes can be successfully
   * decoded by this endpoint, particularly if the flight is not entirely within the
   * continental U.S. airspace, since this function only has access to navaids within
   * that area. If data on a waypoint is missing then the type will be listed as
   * "UNKNOWN". Data from up to 10 days ago can be obtained. If looking for older
   * data, please use the corresponding historical endpoint.
   *
   * @example
   * ```ts
   * const response = await client.flights.getFiledRoute('id');
   * ```
   */
  getFiledRoute(id: string, options?: RequestOptions): APIPromise<FlightGetFiledRouteResponse> {
    return this._client.get(path`/flights/${id}/route`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Returns the track for a flight as an array of positions. By default only actual
   * airborne positions will be included. Surface positions (aircraft taxi movement
   * at supported airports) can be requested using the query-string parameters. Data
   * from up to 10 days ago can be obtained. If looking for older data, please use
   * the corresponding historical endpoint.
   *
   * @example
   * ```ts
   * const response = await client.flights.getTrack('id');
   * ```
   */
  getTrack(
    id: string,
    query: FlightGetTrackParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlightGetTrackResponse> {
    return this._client.get(path`/flights/${id}/track`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Returns a flight's track as a base64-encoded image. Image can contain a variety
   * of additional data layers beyond just the track. Data from up to 10 days ago can
   * be obtained. If looking for older data, please use the corresponding historical
   * endpoint.
   *
   * @example
   * ```ts
   * const response = await client.flights.getTrackMap('id');
   * ```
   */
  getTrackMap(
    id: string,
    query: FlightGetTrackMapParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlightGetTrackMapResponse> {
    return this._client.get(path`/flights/${id}/map`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * This operation informs FlightAware of an upcoming (or recently departed) flight.
   * This information is used solely by FlightAware for improving the accuracy of
   * flight tracking. This method does not transmit to any ANSP/ATC facility for
   * flight separation or operational services. Access to this endpoint requires
   * special account authorization. The FlightAware account must also be subscribed
   * to FlightAware Global and the specified registration or ident must be on the
   * Global account.
   *
   * @example
   * ```ts
   * await client.flights.submitIntent('ident', {
   *   aircraft_type: 'C162',
   *   destination: '50R',
   *   intended_off: '2021-10-16T21:30:00Z',
   *   intended_on: '2021-10-16T22:50:00Z',
   *   origin: 'KSGR',
   * });
   * ```
   */
  submitIntent(ident: string, body: FlightSubmitIntentParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/flights/${ident}/intents`, {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/json; charset=utf-8', Accept: '*/*' },
        options?.headers,
      ]),
    });
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

export interface FlightGetCanonicalIdentResponse {
  idents: Array<FlightGetCanonicalIdentResponse.Ident>;
}

export namespace FlightGetCanonicalIdentResponse {
  export interface Ident {
    /**
     * Canonical ident
     */
    ident: string;

    /**
     * Type of ident given in id
     */
    ident_type: 'designator' | 'registration';
  }
}

export interface FlightGetCurrentPositionResponse {
  /**
   * Actual runway departure time.
   */
  actual_off: string | null;

  /**
   * Actual runway arrival time.
   */
  actual_on: string | null;

  /**
   * Aircraft type will generally be ICAO code, but IATA code will be given when the
   * ICAO code is not known.
   */
  aircraft_type: string | null;

  /**
   * List of 4 coordinates representing the edges of a box that entirely contains
   * this flight's positions. The order of the coordinates are the top, left, bottom,
   * and right sides of the box.
   */
  bounding_box: Array<number> | null;

  /**
   * Information for this flight's destination airport.
   */
  destination: FlightGetCurrentPositionResponse.Destination | null;

  /**
   * Unique identifier assigned by FlightAware for this specific flight. If the
   * flight is diverted, the new leg of the flight will have a duplicate
   * fa_flight_id.
   */
  fa_flight_id: string;

  /**
   * Timestamp of when the first position for this flight was received.
   */
  first_position_time: string | null;

  /**
   * Indicates if Foresight predictions are available for AeroAPI /foresight
   * endpoints.
   */
  foresight_predictions_available: boolean;

  /**
   * Either the operator code followed by the flight number for the flight (for
   * commercial flights) or the aircraft's registration (for general aviation).
   */
  ident: string;

  /**
   * A one or two character identifier prefix code (Common values: G or GG Medevac, L
   * Lifeguard, A Air Taxi, H Heavy, M Medium).
   */
  ident_prefix: string | null;

  /**
   * Most recent position received for this flight.
   */
  last_position: FlightGetCurrentPositionResponse.LastPosition | null;

  /**
   * Information for this flight's origin airport.
   */
  origin: FlightGetCurrentPositionResponse.Origin | null;

  /**
   * Predicted time of gate arrival event. Only available from /foresight endpoints.
   */
  predicted_in: string | null;

  /**
   * Source indicator of the predicted time of the gate arrival event. Only available
   * from /foresight endpoints.
   */
  predicted_in_source: 'Foresight' | 'Historical Average' | null;

  /**
   * Predicted time of runway departure event. Only available from /foresight
   * endpoints.
   */
  predicted_off: string | null;

  /**
   * Source indicator of the predicted time of the runway departure event. Only
   * available from /foresight endpoints.
   */
  predicted_off_source: 'Foresight' | 'Historical Average' | null;

  /**
   * Predicted time of runway arrival event. Only available from /foresight
   * endpoints.
   */
  predicted_on: string | null;

  /**
   * Source indicator of the predicted time of the runway arrival event. Only
   * available from /foresight endpoints.
   */
  predicted_on_source: 'Foresight' | 'Historical Average' | null;

  /**
   * Predicted time of gate departure event. Only available from /foresight
   * endpoints.
   */
  predicted_out: string | null;

  /**
   * Source indicator of the predicted time of the gate departure event. Only
   * available from /foresight endpoints.
   */
  predicted_out_source: 'Foresight' | 'Historical Average' | null;

  /**
   * Route waypoints as an array of alternating latitudes and longitudes.
   */
  waypoints: Array<number>;

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
   * Aircraft registration (tail number) of the aircraft, when known. This field is
   * not populated by the `/flights/search`, `flights/{id}/position` and
   * `/foresight/flights/{id}/position` endpoints.
   */
  registration?: string | null;
}

export namespace FlightGetCurrentPositionResponse {
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
   * Most recent position received for this flight.
   */
  export interface LastPosition {
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

export interface FlightGetFiledRouteResponse {
  fixes: Array<FlightGetFiledRouteResponse.Fix>;

  route_distance: string | null;
}

export namespace FlightGetFiledRouteResponse {
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

export interface FlightGetTrackResponse {
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

  positions?: Array<FlightGetTrackResponse.Position | null>;
}

export namespace FlightGetTrackResponse {
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

export interface FlightGetTrackMapResponse {
  map: string;
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
   * date must be no further than 10 days in the past and 2 days in the future. If
   * not specified, will default to departures starting approximately 2 days in the
   * future. If using date instead of datetime, the time will default to 00:00:00Z.
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
   * date must be no further than 10 days in the past and 2 days in the future. If
   * not specified, will default to departures starting approximately 11 days in the
   * past. If using date instead of datetime, the time will default to 00:00:00Z.
   */
  start?: unknown;
}

export interface FlightGetCanonicalIdentParams {
  /**
   * An ISO 3166-1 alpha-2 country code.
   */
  country_code?: string;

  /**
   * Type of ident provided in the ident parameter
   */
  ident_type?: 'designator' | 'registration';
}

export interface FlightGetTrackParams {
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

export interface FlightGetTrackMapParams {
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

export interface FlightSubmitIntentParams {
  /**
   * Aircraft type ICAO code.
   */
  aircraft_type: string;

  /**
   * Destination airport ICAO code or LID.
   */
  destination: string;

  /**
   * Intended runway departure time of flight. This must be within 2 hours of the
   * actual departure time or the flight intent will be ignored. Time may not be more
   * than 1 hour in the past or 48 hours in the future.
   */
  intended_off: string;

  /**
   * Intended runway arrival time of flight.
   */
  intended_on: string;

  /**
   * Origin airport ICAO code or LID.
   */
  origin: string;

  /**
   * Cruising airspeed (knots).
   */
  airspeed?: number;

  /**
   * Cruising altitude (feet).
   */
  altitude?: number;

  /**
   * Flight route as a series of space-separate waypoints.
   */
  route?: string;
}

Flights.Search = Search;

export declare namespace Flights {
  export {
    type FlightRetrieveResponse as FlightRetrieveResponse,
    type FlightGetCanonicalIdentResponse as FlightGetCanonicalIdentResponse,
    type FlightGetCurrentPositionResponse as FlightGetCurrentPositionResponse,
    type FlightGetFiledRouteResponse as FlightGetFiledRouteResponse,
    type FlightGetTrackResponse as FlightGetTrackResponse,
    type FlightGetTrackMapResponse as FlightGetTrackMapResponse,
    type FlightRetrieveParams as FlightRetrieveParams,
    type FlightGetCanonicalIdentParams as FlightGetCanonicalIdentParams,
    type FlightGetTrackParams as FlightGetTrackParams,
    type FlightGetTrackMapParams as FlightGetTrackMapParams,
    type FlightSubmitIntentParams as FlightSubmitIntentParams,
  };

  export {
    Search as Search,
    type SearchAdvancedSearchResponse as SearchAdvancedSearchResponse,
    type SearchCountResponse as SearchCountResponse,
    type SearchFindPositionsResponse as SearchFindPositionsResponse,
    type SearchPerformResponse as SearchPerformResponse,
    type SearchAdvancedSearchParams as SearchAdvancedSearchParams,
    type SearchCountParams as SearchCountParams,
    type SearchFindPositionsParams as SearchFindPositionsParams,
    type SearchPerformParams as SearchPerformParams,
  };
}
