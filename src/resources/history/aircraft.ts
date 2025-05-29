// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Aircraft extends APIResource {
  /**
   * Returns flight info status summary for an aircraft's last known flight given its
   * registration. The search is limited to flights flown since January 1, 2011. On a
   * successful response, the body will contain a flights array with only 1 element.
   * If a user queries a registration with it's last known flight before January 1,
   * 2011, an empty flights array will be returned.
   *
   * @example
   * ```ts
   * const response = await client.history.aircraft.lastFlight(
   *   'registration',
   * );
   * ```
   */
  lastFlight(registration: string, options?: RequestOptions): APIPromise<AircraftLastFlightResponse> {
    return this._client.get(path`/history/aircraft/${registration}/last_flight`, options);
  }
}

export interface AircraftLastFlightResponse {
  flights: Array<AircraftLastFlightResponse.Flight>;
}

export namespace AircraftLastFlightResponse {
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
}

export declare namespace Aircraft {
  export { type AircraftLastFlightResponse as AircraftLastFlightResponse };
}
