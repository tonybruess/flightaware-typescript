// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Aircraft extends APIResource {
  /**
   * Given an aircraft identification, returns true if the aircraft is blocked from
   * public tracking per request from the owner/operator, false if it is not blocked.
   * Any IATA-like idents will be translated to ICAO before lookup. When marked as
   * blocked, no associated flight information will be visible in AeroAPI.
   * FlightAware can provide aircraft owner/operators with secure access to their
   * blocked flight data by
   * [contacting FlightAware for help](https://www.flightaware.com/about/contact).
   *
   * @example
   * ```ts
   * const response = await client.aircraft.checkBlocked(
   *   'ident',
   * );
   * ```
   */
  checkBlocked(ident: string, options?: RequestOptions): APIPromise<AircraftCheckBlockedResponse> {
    return this._client.get(path`/aircraft/${ident}/blocked`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Returns information about the owner of an aircraft, given a flight number or
   * aircraft registration. Data returned includes owner's name, location (typically
   * city and state), and website, if any. Codeshares and alternate idents are
   * automatically searched. Specific owner name information is limited to ownership
   * within the US (sourced by the FAA), Australia, and New Zealand. Note that while
   * this information is updated weekly, there may be a lag in upstream data sources
   * reflecting a change in ownership.
   *
   * @example
   * ```ts
   * const response = await client.aircraft.getOwner('ident');
   * ```
   */
  getOwner(ident: string, options?: RequestOptions): APIPromise<AircraftGetOwnerResponse> {
    return this._client.get(path`/aircraft/${ident}/owner`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Returns information about an aircraft type, given an ICAO aircraft type
   * designator string. Data returned includes the description, type, manufacturer,
   * engine type, and engine count.
   *
   * @example
   * ```ts
   * const response = await client.aircraft.getTypeInfo('GALX');
   * ```
   */
  getTypeInfo(type: string, options?: RequestOptions): APIPromise<AircraftGetTypeInfoResponse> {
    return this._client.get(path`/aircraft/types/${type}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }
}

export interface AircraftCheckBlockedResponse {
  /**
   * Set to true if the aircraft or ident is blocked from tracking.
   */
  blocked: boolean;
}

export interface AircraftGetOwnerResponse {
  owner?: AircraftGetOwnerResponse.Owner;
}

export namespace AircraftGetOwnerResponse {
  export interface Owner {
    /**
     * City and state of the registered owner. For Australia, state and country. For
     * New Zealand, city and country.
     */
    location?: string | null;

    /**
     * Street address of the registered owner
     */
    location2?: string | null;

    /**
     * Name of the registered owner of the aircraft
     */
    name?: string | null;

    /**
     * Website for the owner if available
     */
    website?: string | null;
  }
}

export interface AircraftGetTypeInfoResponse {
  /**
   * A short description of the aircraft
   */
  description?: string;

  /**
   * Number of engines
   */
  engine_count?: number | null;

  /**
   * Type of engine
   */
  engine_type?: string | null;

  /**
   * Manufacturer of aircraft
   */
  manufacturer?: string;

  /**
   * Type of aircraft
   */
  type?: string;
}

export declare namespace Aircraft {
  export {
    type AircraftCheckBlockedResponse as AircraftCheckBlockedResponse,
    type AircraftGetOwnerResponse as AircraftGetOwnerResponse,
    type AircraftGetTypeInfoResponse as AircraftGetTypeInfoResponse,
  };
}
