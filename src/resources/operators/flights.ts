// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Flights extends APIResource {
  /**
   * Returns all recent and upcoming flights for this operator. Behaviour for
   * optional start and end dates for each type returned (`scheduled`, `arrivals`,
   * `enroute`) match the behaviour in their corresponding endpoints.
   */
  list(
    id: string,
    query: FlightListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlightListResponse> {
    return this._client.get(path`/operators/${id}/flights`, { query, ...options });
  }

  /**
   * Returns counts of both airborne and recently operated flights for operator.
   */
  getCounts(id: string, options?: RequestOptions): APIPromise<FlightGetCountsResponse> {
    return this._client.get(path`/operators/${id}/flights/counts`, options);
  }

  /**
   * Returns flights for this operator that have departed and subsequently arrived,
   * ordered by `actual_on` descending. The optional start and end parameters will be
   * compared against `actual_on` to limit the flights returned. The start
   * parameter's default value is 24 hours before the current time. The end
   * parameter's default value is the current time.
   */
  listArrivals(
    id: string,
    query: FlightListArrivalsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlightListArrivalsResponse> {
    return this._client.get(path`/operators/${id}/flights/arrivals`, { query, ...options });
  }

  /**
   * Returns flights for this operator that have departed and are currently en route,
   * ordered by `estimated_on` ascending. The optional start and end parameters will
   * be compared against `estimated_on` to limit the flights returned. The start
   * parameter's default value is 48 hours before the current time (this accounts for
   * delayed flights). There is no default end bound.
   */
  listEnroute(
    id: string,
    query: FlightListEnrouteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlightListEnrouteResponse> {
    return this._client.get(path`/operators/${id}/flights/enroute`, { query, ...options });
  }

  /**
   * Returns flights for this operator that are scheduled to depart or have recently
   * been cancelled, ordered by `estimated_off` (or `scheduled_off` if
   * `estimated_off` is missing) ascending. The optional start and end parameters
   * will be compared against `scheduled_off` to limit the flights returned. If start
   * is not specified, flights with a `scheduled_off` or cancellation time no further
   * than two hours into the past will be returned. If end is not specified, there is
   * no guaranteed bound for how far in the future scheduled flights will be returned
   * (it will typically be around 48 hours in the future for commercial flights,
   * though).
   */
  listScheduled(
    id: string,
    query: FlightListScheduledParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlightListScheduledResponse> {
    return this._client.get(path`/operators/${id}/flights/scheduled`, { query, ...options });
  }
}

export interface FlightListResponse {
  arrivals: Array<FlightListResponse.Arrival>;

  enroute: Array<FlightListResponse.Enroute>;

  /**
   * Object containing links to related resources.
   */
  links: FlightListResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;

  scheduled: Array<FlightListResponse.Scheduled>;
}

export namespace FlightListResponse {
  export interface Arrival {
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
    destination: Arrival.Destination | null;

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
    origin: Arrival.Origin | null;

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

  export namespace Arrival {
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

  export interface Enroute {
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
    destination: Enroute.Destination | null;

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
    origin: Enroute.Origin | null;

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

  export namespace Enroute {
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

  export interface Scheduled {
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
    destination: Scheduled.Destination | null;

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
    origin: Scheduled.Origin | null;

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

  export namespace Scheduled {
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
}

export interface FlightGetCountsResponse {
  /**
   * The number of currently airborne flights for this operator.
   */
  airborne: number;

  /**
   * The number of flights departed in the last 24 hours for this operator, including
   * airborne flights.
   */
  flights_last_24_hours: number;
}

export interface FlightListArrivalsResponse {
  arrivals: Array<FlightListArrivalsResponse.Arrival>;

  /**
   * Object containing links to related resources.
   */
  links: FlightListArrivalsResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;
}

export namespace FlightListArrivalsResponse {
  export interface Arrival {
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
    destination: Arrival.Destination | null;

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
    origin: Arrival.Origin | null;

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

  export namespace Arrival {
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

export interface FlightListEnrouteResponse {
  enroute: Array<FlightListEnrouteResponse.Enroute>;

  /**
   * Object containing links to related resources.
   */
  links: FlightListEnrouteResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;
}

export namespace FlightListEnrouteResponse {
  export interface Enroute {
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
    destination: Enroute.Destination | null;

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
    origin: Enroute.Origin | null;

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

  export namespace Enroute {
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

export interface FlightListScheduledResponse {
  /**
   * Object containing links to related resources.
   */
  links: FlightListScheduledResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;

  scheduled: Array<FlightListScheduledResponse.Scheduled>;
}

export namespace FlightListScheduledResponse {
  /**
   * Object containing links to related resources.
   */
  export interface Links {
    /**
     * A link to the next set of records in a collection.
     */
    next: string;
  }

  export interface Scheduled {
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
    destination: Scheduled.Destination | null;

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
    origin: Scheduled.Origin | null;

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

  export namespace Scheduled {
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
}

export interface FlightListParams {
  /**
   * Opaque value used to get the next batch of data from a paged collection.
   */
  cursor?: string;

  /**
   * The ending date range for flight results. The format is ISO8601 date or
   * datetime, and the bound is exclusive. Specified end date must be no further than
   * 10 days in the past and 2 days in the future. If using date instead of datetime,
   * the time will default to 00:00:00Z.
   */
  end?: unknown;

  /**
   * Maximum number of pages to fetch. This is an upper limit and not a guarantee of
   * how many pages will be returned.
   */
  max_pages?: number;

  /**
   * The starting date range for flight results. The format is ISO8601 date or
   * datetime, and the bound is inclusive. Specified start date must be no further
   * than 10 days in the past and 2 days in the future. If using date instead of
   * datetime, the time will default to 00:00:00Z.
   */
  start?: unknown;
}

export interface FlightListArrivalsParams {
  /**
   * Opaque value used to get the next batch of data from a paged collection.
   */
  cursor?: string;

  /**
   * The ending date range for flight results. The format is ISO8601 date or
   * datetime, and the bound is exclusive. Specified end date must be no further than
   * 10 days in the past and 2 days in the future. If using date instead of datetime,
   * the time will default to 00:00:00Z.
   */
  end?: unknown;

  /**
   * Maximum number of pages to fetch. This is an upper limit and not a guarantee of
   * how many pages will be returned.
   */
  max_pages?: number;

  /**
   * The starting date range for flight results. The format is ISO8601 date or
   * datetime, and the bound is inclusive. Specified start date must be no further
   * than 10 days in the past and 2 days in the future. If using date instead of
   * datetime, the time will default to 00:00:00Z.
   */
  start?: unknown;
}

export interface FlightListEnrouteParams {
  /**
   * Opaque value used to get the next batch of data from a paged collection.
   */
  cursor?: string;

  /**
   * The ending date range for flight results. The format is ISO8601 date or
   * datetime, and the bound is exclusive. Specified end date must be no further than
   * 10 days in the past and 2 days in the future. If using date instead of datetime,
   * the time will default to 00:00:00Z.
   */
  end?: unknown;

  /**
   * Maximum number of pages to fetch. This is an upper limit and not a guarantee of
   * how many pages will be returned.
   */
  max_pages?: number;

  /**
   * The starting date range for flight results. The format is ISO8601 date or
   * datetime, and the bound is inclusive. Specified start date must be no further
   * than 10 days in the past and 2 days in the future. If using date instead of
   * datetime, the time will default to 00:00:00Z.
   */
  start?: unknown;
}

export interface FlightListScheduledParams {
  /**
   * Opaque value used to get the next batch of data from a paged collection.
   */
  cursor?: string;

  /**
   * The ending date range for flight results. The format is ISO8601 date or
   * datetime, and the bound is exclusive. Specified end date must be no further than
   * 10 days in the past and 2 days in the future. If using date instead of datetime,
   * the time will default to 00:00:00Z.
   */
  end?: unknown;

  /**
   * Maximum number of pages to fetch. This is an upper limit and not a guarantee of
   * how many pages will be returned.
   */
  max_pages?: number;

  /**
   * The starting date range for flight results. The format is ISO8601 date or
   * datetime, and the bound is inclusive. Specified start date must be no further
   * than 10 days in the past and 2 days in the future. If using date instead of
   * datetime, the time will default to 00:00:00Z.
   */
  start?: unknown;
}

export declare namespace Flights {
  export {
    type FlightListResponse as FlightListResponse,
    type FlightGetCountsResponse as FlightGetCountsResponse,
    type FlightListArrivalsResponse as FlightListArrivalsResponse,
    type FlightListEnrouteResponse as FlightListEnrouteResponse,
    type FlightListScheduledResponse as FlightListScheduledResponse,
    type FlightListParams as FlightListParams,
    type FlightListArrivalsParams as FlightListArrivalsParams,
    type FlightListEnrouteParams as FlightListEnrouteParams,
    type FlightListScheduledParams as FlightListScheduledParams,
  };
}
