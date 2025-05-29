// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Search extends APIResource {
  /**
   * Returns currently or recently airborne flights based on geospatial search
   * parameters.
   *
   * Query parameters include a latitude/longitude box, aircraft ident with
   * wildcards, type with wildcards, prefix, origin airport, destination airport,
   * origin or destination airport, groundspeed, and altitude. It takes search terms
   * in a single string comprising of {operator key value} elements and returns an
   * array of flight structures. Each search term must be enclosed in curly braces.
   * Multiple search terms can be combined in an implicit boolean "and" by separating
   * the terms with at least one space. This function only searches flight data
   * representing approximately the last 24 hours. Codeshares and alternate idents
   * are NOT searched when matching against the ident key.
   *
   * The supported operators include (note that operators take different numbers of
   * arguments):
   *
   * - false - results must have the specified boolean key set to a value of false.
   *   Example: {false arrived}
   * - true - results must have the specified boolean key set to a value of true.
   *   Example: {true lifeguard}
   * - null - results must have the specified key set to a null value. Example: {null
   *   waypoints}
   * - notnull - results must have the specified key not set to a null value.
   *   Example: {notnull aircraftType}
   * - = - results must have a key that exactly matches the specified value. Example:
   *   {= aircraftType C172}
   * - != - results must have a key that must not match the specified value. Example:
   *   {!= prefix H}
   * - < - results must have a key that is lexicographically less-than a specified
   *   value. Example: {< arrivalTime 1276811040}
   * - \> - results must have a key that is lexicographically greater-than a
   *   specified value. Example: {> speed 500}
   * - <= - results must have a key that is lexicographically less-than-or-equal-to a
   *   specified value. Example: {<= alt 8000}
   * - \>= - results must have a key that is lexicographically
   *   greater-than-or-equal-to a specified value.
   * - match - results must have a key that matches against a case-insensitive
   *   wildcard pattern. Example: {match ident AAL\*}
   * - notmatch - results must have a key that does not match against a
   *   case-insensitive wildcard pattern. Example: {notmatch aircraftType B76\*}
   * - range - results must have a key that is numerically between the two specified
   *   values. Example: {range alt 8000 20000}
   * - in - results must have a key that exactly matches one of the specified values.
   *   Example: {in orig {KLAX KBUR KSNA KLGB}}
   * - orig_or_dest - results must have either the origin or destination key exactly
   *   match one of the specified values. Example: {orig_or_dest {KLAX KBUR KSNA
   *   KLGB}}
   * - airline - results will only include airline flight if the argument is 1, or
   *   will only include GA flights if the argument is 0. Example: {airline 1}
   * - aircraftType - results must have an aircraftType key that matches one of the
   *   specified case-insensitive wildcard patterns. Example: {aircraftType {B76*
   *   B77*}}
   * - ident - results must have an ident key that matches one of the specified
   *   case-insensitive wildcard patterns. Example: {ident {N123* N456* AAL* UAL*}}
   * - ident_or_reg - results must have an ident key or was known to be operated by
   *   an aircraft registration that matches one of the specified case-insensitive
   *   wildcard patterns. Example: {ident_or_reg {N123* N456* AAL* UAL*}}
   *
   * The supported key names include (note that not all of these key names are
   * returned in the result structure, and some have slightly different names):
   *
   * - actualDepartureTime - Actual time of departure, or null if not departed yet.
   *   UNIX epoch timestamp seconds since 1970
   * - aircraftType - aircraft type ID (for example: B763)
   * - alt - altitude at last reported position (hundreds of feet or Flight Level)
   * - altChange - altitude change indication (for example: "C" if climbing, "D" if
   *   descending, and empty if it is level)
   * - arrivalTime - Actual time of arrival, or null if not arrived yet. UNIX epoch
   *   timestamp seconds since 1970
   * - arrived - true if the flight has arrived at its destination.
   * - cancelled - true if the flight has been cancelled. The meaning of cancellation
   *   is that the flight is no longer being tracked by FlightAware. There are a
   *   number of reasons a flight may be cancelled including cancellation by the
   *   airline, but that will not always be the case.
   * - cdt - Controlled Departure Time, set if there is a ground hold on the flight.
   *   UNIX epoch timestamp seconds since 1970
   * - clock - Time of last received position. UNIX epoch timestamp seconds since
   *   1970
   * - cta - Controlled Time of Arrival, set if there is a ground hold on the flight.
   *   UNIX epoch timestamp seconds since 1970
   * - dest - ICAO airport code of destination (for example: KLAX)
   * - edt - Estimated Departure Time. Epoch timestamp seconds since 1970
   * - eta - Estimated Time of Arrival. Epoch timestamp seconds since 1970
   * - fdt - Field Departure Time. UNIX epoch timestamp seconds since 1970
   * - firstPositionTime - Time when first reported position was received, or 0 if no
   *   position has been received yet. Epoch timestamp seconds since 1970
   * - fixes - intersections and/or VORs along the route (for example: SLS AMERO
   *   ARTOM VODIR NOTOS ULAPA ACA NUXCO OLULA PERAS ALIPO UPN GDL KEDMA BRISA CUL
   *   PERTI CEN PPE ALTAR ASUTA JLI RONLD LAADY WYVIL OLDEE RAL PDZ ARNES BASET
   *   WELLZ CIVET)
   * - fp - unique identifier assigned by FlightAware for this flight, aka
   *   fa_flight_id.
   * - gs - ground speed at last reported position, in kts.
   * - heading - direction of travel at last reported position.
   * - hiLat - highest latitude travelled by flight.
   * - hiLon - highest longitude travelled by flight.
   * - ident - flight identifier or registration of aircraft.
   * - lastPositionTime - Time when last reported position was received, or 0 if no
   *   position has been received yet. Epoch timestamp seconds since 1970.
   * - lat - latitude of last reported position.
   * - lifeguard - true if a "lifeguard" rescue flight.
   * - lon - longitude of last reported position.
   * - lowLat - lowest latitude travelled by flight.
   * - lowLon - lowest longitude travelled by flight.
   * - ogta - Original Time of Arrival. UNIX epoch timestamp seconds since 1970
   * - ogtd - Original Time of Departure. UNIX epoch timestamp seconds since 1970
   * - orig - ICAO airport code of origin (for example: KIAH)
   * - physClass - physical class (for example: J is jet)
   * - prefix - A one or two character identifier prefix code (common values: G or GG
   *   Medevac, L Lifeguard, A Air Taxi, H Heavy, M Medium).
   * - speed - ground speed, in kts.
   * - status - Single letter code for current flight status, can be S Scheduled, F
   *   Filed, A Active, Z Completed, or X Cancelled.
   * - updateType - data source of last position (P=projected, O=oceanic, Z=radar,
   *   A=ADS-B, M=multilateration, D=datalink, X=surface and near surface (ADS-B and
   *   ASDE-X), S=space-based).
   * - waypoints - all of the intersections and VORs comprising the route
   *
   * @example
   * ```ts
   * const response =
   *   await client.flights.search.advancedSearch();
   * ```
   */
  advancedSearch(
    query: SearchAdvancedSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SearchAdvancedSearchResponse> {
    return this._client.get('/flights/search/advanced', { query, ...options });
  }

  /**
   * Full search query documentation is available at the /flights/search endpoint.
   *
   * @example
   * ```ts
   * const response = await client.flights.search.count();
   * ```
   */
  count(
    query: SearchCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SearchCountResponse> {
    return this._client.get('/flights/search/count', { query, ...options });
  }

  /**
   * Returns flight positions based on geospatial search parameters. This allows you
   * to locate flights that have ever flown within a specific a latitude/longitude
   * box, groundspeed, and altitude. It takes search terms in a single string
   * comprising of {operator key value} elements and returns an array of flight
   * structures. Each search term must be enclosed in curly braces. Multiple search
   * terms can be combined in an implicit boolean "and" by separating the terms with
   * at least one space. This function only searches flight data representing
   * approximately the last 24 hours.
   *
   * The supported operators include (note that operators take different numbers of
   * arguments):
   *
   * - false - results must have the specified boolean key set to a value of false.
   *   Example: {false preferred}
   * - true - results must have the specified boolean key set to a value of true.
   *   Example: {true preferred}
   * - null - results must have the specified key set to a null value. Example: {null
   *   waypoints}
   * - notnull - results must have the specified key not set to a null value.
   *   Example: {notnull aircraftType}
   * - = - results must have a key that exactly matches the specified value. Example:
   *   {= fp C172}
   * - != - results must have a key that must not match the specified value. Example:
   *   {!= prefix H}
   * - < - results must have a key that is lexicographically less-than a specified
   *   value. Example: {< arrivalTime 1276811040}
   * - \> - results must have a key that is lexicographically greater-than a
   *   specified value. Example: {> speed 500}
   * - <= - results must have a key that is lexicographically less-than-or-equal-to a
   *   specified value. Example: {<= alt 8000}
   * - \>= - results must have a key that is lexicographically
   *   greater-than-or-equal-to a specified value.
   * - match - results must have a key that matches against a case-insensitive
   *   wildcard pattern. Example: {match ident AAL\*}
   * - notmatch - results must have a key that does not match against a
   *   case-insensitive wildcard pattern. Example: {notmatch aircraftType B76\*}
   * - range - results must have a key that is numerically between the two specified
   *   values. Example: {range alt 8000 20000}
   * - in - results must have a key that exactly matches one of the specified values.
   *   Example: {in orig {KLAX KBUR KSNA KLGB}}
   *
   * The supported key names include (note that not all of these key names are
   * returned in the result structure, and some have slightly different names):
   *
   * - alt - Altitude, measured in hundreds of feet or Flight Level.
   * - altChange - a one-character code indicating the change in altitude.
   * - cid - a three-character cid code
   * - clock - UNIX epoch timestamp seconds since 1970
   * - fp - unique identifier assigned by FlightAware for this flight, aka
   *   fa_flight_id.
   * - gs - ground speed, measured in kts.
   * - lat - latitude of the reported position.
   * - lon - longitude of the reported position
   * - updateType - source of the last reported position (P=projected, O=oceanic,
   *   Z=radar, A=ADS-B, M=multilateration, D=datalink, X=surface and near surface
   *   (ADS-B and ASDE-X), S=space-based)
   *
   * @example
   * ```ts
   * const response =
   *   await client.flights.search.findPositions();
   * ```
   */
  findPositions(
    query: SearchFindPositionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SearchFindPositionsResponse> {
    return this._client.get('/flights/search/positions', { query, ...options });
  }

  /**
   * Search for airborne flights by matching against various parameters including
   * geospatial data. Uses a simplified query syntax compared to
   * /flights/search/advanced.
   *
   * @example
   * ```ts
   * const response = await client.flights.search.perform();
   * ```
   */
  perform(
    query: SearchPerformParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SearchPerformResponse> {
    return this._client.get('/flights/search', { query, ...options });
  }
}

export interface SearchAdvancedSearchResponse {
  flights: Array<SearchAdvancedSearchResponse.Flight>;

  /**
   * Object containing links to related resources.
   */
  links: SearchAdvancedSearchResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;
}

export namespace SearchAdvancedSearchResponse {
  export interface Flight {
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
    destination: Flight.Destination | null;

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
    last_position: Flight.LastPosition | null;

    /**
     * Information for this flight's origin airport.
     */
    origin: Flight.Origin | null;

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

export interface SearchCountResponse {
  count: number;
}

export interface SearchFindPositionsResponse {
  /**
   * Object containing links to related resources.
   */
  links: SearchFindPositionsResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;

  positions: Array<SearchFindPositionsResponse.Position | null>;
}

export namespace SearchFindPositionsResponse {
  /**
   * Object containing links to related resources.
   */
  export interface Links {
    /**
     * A link to the next set of records in a collection.
     */
    next: string;
  }

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

export interface SearchPerformResponse {
  flights: Array<SearchPerformResponse.Flight>;

  /**
   * Object containing links to related resources.
   */
  links: SearchPerformResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;
}

export namespace SearchPerformResponse {
  export interface Flight {
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
    destination: Flight.Destination | null;

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
    last_position: Flight.LastPosition | null;

    /**
     * Information for this flight's origin airport.
     */
    origin: Flight.Origin | null;

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

export interface SearchAdvancedSearchParams {
  /**
   * Opaque value used to get the next batch of data from a paged collection.
   */
  cursor?: string;

  /**
   * Maximum number of pages to fetch. This is an upper limit and not a guarantee of
   * how many pages will be returned.
   */
  max_pages?: number;

  /**
   * Query to search for airborne or recently arrived flights. It should not exceed
   * 1000 bytes in length. Search criteria is only applied to the most recent
   * position for a flight. This function only searches flights within approximately
   * the last 24 hours. The supported operators include (note that operators take
   * different numbers of arguments):
   *
   * - false - results must have the specified boolean key set to a value of false.
   *   Example: {false arrived}
   * - true - results must have the specified boolean key set to a value of true.
   *   Example: {true lifeguard}
   * - null - results must have the specified key set to a null value. Example: {null
   *   waypoints}
   * - notnull - results must have the specified key not set to a null value.
   *   Example: {notnull aircraftType}
   * - = - results must have a key that exactly matches the specified value. Example:
   *   {= aircraftType C172}
   * - != - results must have a key that must not match the specified value. Example:
   *   {!= prefix H}
   * - < - results must have a key that is lexicographically less-than a specified
   *   value. Example: {< arrivalTime 1276811040}
   * - \> - results must have a key that is lexicographically greater-than a
   *   specified value. Example: {> speed 500}
   * - <= - results must have a key that is lexicographically less-than-or-equal-to a
   *   specified value. Example: {<= alt 8000}
   * - \>= - results must have a key that is lexicographically
   *   greater-than-or-equal-to a specified value.
   * - match - results must have a key that matches against a case-insensitive
   *   wildcard pattern. Example: {match ident AAL\*}
   * - notmatch - results must have a key that does not match against a
   *   case-insensitive wildcard pattern. Example: {notmatch aircraftType B76\*}
   * - range - results must have a key that is numerically between the two specified
   *   values. Example: {range alt 8000 20000}
   * - in - results must have a key that exactly matches one of the specified values.
   *   Example: {in orig {KLAX KBUR KSNA KLGB}}
   * - orig_or_dest - results must have either the origin or destination key exactly
   *   match one of the specified values. Example: {orig_or_dest {KLAX KBUR KSNA
   *   KLGB}}
   * - airline - results will only include airline flight if the argument is 1, or
   *   will only include GA flights if the argument is 0. Example: {airline 1}
   * - aircraftType - results must have an aircraftType key that matches one of the
   *   specified case-insensitive wildcard patterns. Example: {aircraftType {B76*
   *   B77*}}
   * - ident - results must have an ident key that matches one of the specified
   *   case-insensitive wildcard patterns. Example: {ident {N123* N456* AAL* UAL*}}
   * - ident_or_reg - results must have an ident key or was known to be operated by
   *   an aircraft registration that matches one of the specified case-insensitive
   *   wildcard patterns. Example: {ident_or_reg {N123* N456* AAL* UAL*}}
   *
   * The supported key names include (note that not all of these key names are
   * returned in the result structure, and some have slightly different names):
   *
   * - actualDepartureTime - Actual time of departure, or null if not departed yet.
   *   UNIX epoch timestamp seconds since 1970
   * - aircraftType - aircraft type ID (for example: B763)
   * - alt - altitude at last reported position (hundreds of feet or Flight Level)
   * - altChange - altitude change indication (for example: "C" if climbing, "D" if
   *   descending, and empty if it is level)
   * - arrivalTime - Actual time of arrival, or null if not arrived yet. UNIX epoch
   *   timestamp seconds since 1970
   * - arrived - true if the flight has arrived at its destination.
   * - cancelled - true if the flight has been cancelled. The meaning of cancellation
   *   is that the flight is no longer being tracked by FlightAware. There are a
   *   number of reasons a flight may be cancelled including cancellation by the
   *   airline, but that will not always be the case.
   * - cdt - Controlled Departure Time, set if there is a ground hold on the flight.
   *   UNIX epoch timestamp seconds since 1970
   * - clock - Time of last received position. UNIX epoch timestamp seconds since
   *   1970
   * - cta - Controlled Time of Arrival, set if there is a ground hold on the flight.
   *   UNIX epoch timestamp seconds since 1970
   * - dest - ICAO airport code of destination (for example: KLAX)
   * - edt - Estimated Departure Time. Epoch timestamp seconds since 1970
   * - eta - Estimated Time of Arrival. Epoch timestamp seconds since 1970
   * - fdt - Field Departure Time. UNIX epoch timestamp seconds since 1970
   * - firstPositionTime - Time when first reported position was received, or 0 if no
   *   position has been received yet. Epoch timestamp seconds since 1970
   * - fixes - intersections and/or VORs along the route (for example: SLS AMERO
   *   ARTOM VODIR NOTOS ULAPA ACA NUXCO OLULA PERAS ALIPO UPN GDL KEDMA BRISA CUL
   *   PERTI CEN PPE ALTAR ASUTA JLI RONLD LAADY WYVIL OLDEE RAL PDZ ARNES BASET
   *   WELLZ CIVET)
   * - fp - unique identifier assigned by FlightAware for this flight, aka
   *   fa_flight_id.
   * - gs - ground speed at last reported position, in kts.
   * - heading - direction of travel at last reported position.
   * - hiLat - highest latitude travelled by flight.
   * - hiLon - highest longitude travelled by flight.
   * - ident - flight identifier or registration of aircraft.
   * - lastPositionTime - Time when last reported position was received, or 0 if no
   *   position has been received yet. Epoch timestamp seconds since 1970.
   * - lat - latitude of last reported position.
   * - lifeguard - true if a "lifeguard" rescue flight.
   * - lon - longitude of last reported position.
   * - lowLat - lowest latitude travelled by flight.
   * - lowLon - lowest longitude travelled by flight.
   * - ogta - Original Time of Arrival. UNIX epoch timestamp seconds since 1970
   * - ogtd - Original Time of Departure. UNIX epoch timestamp seconds since 1970
   * - orig - ICAO airport code of origin (for example: KIAH)
   * - physClass - physical class (for example: J is jet)
   * - prefix - A one or two character identifier prefix code (common values: G or GG
   *   Medevac, L Lifeguard, A Air Taxi, H Heavy, M Medium).
   * - speed - ground speed, in kts.
   * - status - Single letter code for current flight status, can be S Scheduled, F
   *   Filed, A Active, Z Completed, or X Cancelled.
   * - updateType - data source of last position (P=projected, O=oceanic, Z=radar,
   *   A=ADS-B, M=multilateration, D=datalink, X=surface and near surface (ADS-B and
   *   ASDE-X), S=space-based).
   * - waypoints - all of the intersections and VORs comprising the route
   */
  query?: string;
}

export interface SearchCountParams {
  /**
   * Query to search for flights with a simplified syntax (compared to
   * /flights/search/advanced). It should not exceed 1000 bytes in length. Query
   * syntax allows filtering by latitude/longitude box, aircraft ident with
   * wildcards, type with wildcards, prefix, origin airport, destination airport,
   * origin or destination airport, groundspeed, and altitude. It takes search terms
   * in a single string comprising "-key value" pairs. Codeshares and alternate
   * idents are NOT searched when using the -idents clause.
   *
   * Keys include:
   *
   * - `-prefix STRING`
   * - `-type STRING`
   * - `-idents STRING`
   * - `-identOrReg STRING`
   * - `-airline STRING`
   * - `-destination STRING`
   * - `-origin STRING`
   * - `-originOrDestination STRING`
   * - `-aboveAltitude INTEGER`
   * - `-belowAltitude INTEGER`
   * - `-aboveGroundspeed INTEGER`
   * - `-belowGroundspeed INTEGER`
   * - `-latlong "MINLAT MINLON MAXLAT MAXLON"`
   */
  query?: string;
}

export interface SearchFindPositionsParams {
  /**
   * Opaque value used to get the next batch of data from a paged collection.
   */
  cursor?: string;

  /**
   * Maximum number of pages to fetch. This is an upper limit and not a guarantee of
   * how many pages will be returned.
   */
  max_pages?: number;

  /**
   * Query to search for flight positions. It should not exceed 1000 bytes in length.
   * Search criteria is applied against all positions of a flight. This function only
   * searches flights within approximately the last 24 hours. The supported operators
   * include (note that operators take different numbers of arguments):
   *
   * - false - results must have the specified boolean key set to a value of false.
   *   Example: {false preferred}
   * - true - results must have the specified boolean key set to a value of true.
   *   Example: {true preferred}
   * - null - results must have the specified key set to a null value. Example: {null
   *   waypoints}
   * - notnull - results must have the specified key not set to a null value.
   *   Example: {notnull aircraftType}
   * - = - results must have a key that exactly matches the specified value. Example:
   *   {= fp C172}
   * - != - results must have a key that must not match the specified value. Example:
   *   {!= prefix H}
   * - < - results must have a key that is lexicographically less-than a specified
   *   value. Example: {< arrivalTime 1276811040}
   * - \> - results must have a key that is lexicographically greater-than a
   *   specified value. Example: {> speed 500}
   * - <= - results must have a key that is lexicographically less-than-or-equal-to a
   *   specified value. Example: {<= alt 8000}
   * - \>= - results must have a key that is lexicographically
   *   greater-than-or-equal-to a specified value.
   * - match - results must have a key that matches against a case-insensitive
   *   wildcard pattern. Example: {match ident AAL\*}
   * - notmatch - results must have a key that does not match against a
   *   case-insensitive wildcard pattern. Example: {notmatch aircraftType B76\*}
   * - range - results must have a key that is numerically between the two specified
   *   values. Example: {range alt 8000 20000}
   * - in - results must have a key that exactly matches one of the specified values.
   *   Example: {in orig {KLAX KBUR KSNA KLGB}}
   *
   * The supported key names include (note that not all of these key names are
   * returned in the result structure, and some have slightly different names):
   *
   * - alt - Altitude, measured in hundreds of feet or Flight Level.
   * - altChange - a one-character code indicating the change in altitude.
   * - altMax - Altitude, measured in hundreds of feet or Flight Level.
   * - cid - a three-character cid code
   * - cidfac - a four-character cidfac code
   * - clock - UNIX epoch timestamp seconds since 1970
   * - fp - unique identifier assigned by FlightAware for this flight, aka
   *   fa_flight_id.
   * - gs - ground speed, measured in kts.
   * - lat - latitude of the reported position.
   * - lon - longitude of the reported position
   * - preferred - boolean indicator of position quality
   * - recvd - UNIX epoch timestamp seconds since 1970
   * - updateType - source of the last reported position (P=projected, O=oceanic,
   *   Z=radar, A=ADS-B, M=multilateration, D=datalink, X=surface and near surface
   *   (ADS-B and ASDE-X), S=space-based)
   */
  query?: string;

  /**
   * Whether to return only a single position per unique fa_flight_id.
   */
  unique_flights?: boolean;
}

export interface SearchPerformParams {
  /**
   * Opaque value used to get the next batch of data from a paged collection.
   */
  cursor?: string;

  /**
   * Maximum number of pages to fetch. This is an upper limit and not a guarantee of
   * how many pages will be returned.
   */
  max_pages?: number;

  /**
   * Query to search for flights with a simplified syntax (compared to
   * /flights/search/advanced). It should not exceed 1000 bytes in length. Query
   * syntax allows filtering by latitude/longitude box, aircraft ident with
   * wildcards, type with wildcards, prefix, origin airport, destination airport,
   * origin or destination airport, groundspeed, and altitude. It takes search terms
   * in a single string comprising "-key value" pairs. Codeshares and alternate
   * idents are NOT searched when using the -idents clause.
   *
   * Keys include:
   *
   * - `-prefix STRING`
   * - `-type STRING`
   * - `-idents STRING`
   * - `-identOrReg STRING`
   * - `-airline STRING`
   * - `-destination STRING`
   * - `-origin STRING`
   * - `-originOrDestination STRING`
   * - `-aboveAltitude INTEGER`
   * - `-belowAltitude INTEGER`
   * - `-aboveGroundspeed INTEGER`
   * - `-belowGroundspeed INTEGER`
   * - `-latlong "MINLAT MINLON MAXLAT MAXLON"`
   * - `-filter {ga|airline}`
   */
  query?: string;
}

export declare namespace Search {
  export {
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
