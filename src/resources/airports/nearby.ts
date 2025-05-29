// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Nearby extends APIResource {
  /**
   * Returns a list of airports located within a given distance from the given
   * location.
   *
   * @example
   * ```ts
   * const nearbies = await client.airports.nearby.list({
   *   latitude: 0,
   *   longitude: 0,
   *   radius: 0,
   * });
   * ```
   */
  list(query: NearbyListParams, options?: RequestOptions): APIPromise<NearbyListResponse> {
    return this._client.get('/airports/nearby', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Returns a list of airports located within a given distance from the specified
   * airport.
   *
   * @example
   * ```ts
   * const response =
   *   await client.airports.nearby.listFromAirport('id', {
   *     radius: 0,
   *   });
   * ```
   */
  listFromAirport(
    id: string,
    query: NearbyListFromAirportParams,
    options?: RequestOptions,
  ): APIPromise<NearbyListFromAirportResponse> {
    return this._client.get(path`/airports/${id}/nearby`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }
}

export interface NearbyListResponse {
  airports: Array<NearbyListResponse.Airport>;

  /**
   * Object containing links to related resources.
   */
  links: NearbyListResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;
}

export namespace NearbyListResponse {
  export interface Airport {
    /**
     * Default airport identifier, generally ICAO but may be IATA or LID if the airport
     * lacks an ICAO code
     */
    airport_code: string;

    /**
     * The URL to flights for this airport
     */
    airport_flights_url: string;

    /**
     * @deprecated IATA or LID identifier for the airport. (Deprecated, use code_iata
     * for the IATA identifier or code_lid for the LID identifier instead.)
     */
    alternate_ident: string | null;

    /**
     * Closest city to the airport
     */
    city: string;

    /**
     * 2-letter code of country where the airport resides (ISO 3166-1 alpha-2)
     */
    country_code: string;

    /**
     * Cardinal direction from specified location to airport
     */
    direction: 'N' | 'E' | 'S' | 'W' | 'NE' | 'SE' | 'SW' | 'NW';

    /**
     * Distance of airport from the specified location (statute miles)
     */
    distance: number;

    /**
     * Height above Mean Sea Level (MSL)
     */
    elevation: number;

    /**
     * Direction from specified location to airport (degrees)
     */
    heading: number;

    /**
     * Airport's latitude, generally the center point of the airport
     */
    latitude: number;

    /**
     * Airport's longitude, generally the center point of the airport
     */
    longitude: number;

    /**
     * Common name for the airport
     */
    name: string;

    /**
     * State/province where the airport resides if applicable. For US states this will
     * be their 2-letter code; for provinces or other entities, it will be the full
     * name.
     */
    state: string;

    /**
     * Applicable timezone for the airport, in the TZ database format
     */
    timezone: string;

    /**
     * Link to the wikipedia page for the airport
     */
    wiki_url: string | null;

    /**
     * IATA identifier for the airport if known
     */
    code_iata?: string | null;

    /**
     * ICAO identifier for the airport if known
     */
    code_icao?: string | null;

    /**
     * LID identifier for the airport if known
     */
    code_lid?: string | null;

    /**
     * Type of airport
     */
    type?:
      | 'Airport'
      | 'Heliport'
      | 'Seaplane Base'
      | 'Ultralight'
      | 'Stolport'
      | 'Gliderport'
      | 'Balloonport'
      | null;
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

export interface NearbyListFromAirportResponse {
  airports: Array<NearbyListFromAirportResponse.Airport>;

  /**
   * Object containing links to related resources.
   */
  links: NearbyListFromAirportResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;
}

export namespace NearbyListFromAirportResponse {
  export interface Airport {
    /**
     * Default airport identifier, generally ICAO but may be IATA or LID if the airport
     * lacks an ICAO code
     */
    airport_code: string;

    /**
     * The URL to flights for this airport
     */
    airport_flights_url: string;

    /**
     * @deprecated IATA or LID identifier for the airport. (Deprecated, use code_iata
     * for the IATA identifier or code_lid for the LID identifier instead.)
     */
    alternate_ident: string | null;

    /**
     * Closest city to the airport
     */
    city: string;

    /**
     * 2-letter code of country where the airport resides (ISO 3166-1 alpha-2)
     */
    country_code: string;

    /**
     * Cardinal direction from specified location to airport
     */
    direction: 'N' | 'E' | 'S' | 'W' | 'NE' | 'SE' | 'SW' | 'NW';

    /**
     * Distance of airport from the specified location (statute miles)
     */
    distance: number;

    /**
     * Height above Mean Sea Level (MSL)
     */
    elevation: number;

    /**
     * Direction from specified location to airport (degrees)
     */
    heading: number;

    /**
     * Airport's latitude, generally the center point of the airport
     */
    latitude: number;

    /**
     * Airport's longitude, generally the center point of the airport
     */
    longitude: number;

    /**
     * Common name for the airport
     */
    name: string;

    /**
     * State/province where the airport resides if applicable. For US states this will
     * be their 2-letter code; for provinces or other entities, it will be the full
     * name.
     */
    state: string;

    /**
     * Applicable timezone for the airport, in the TZ database format
     */
    timezone: string;

    /**
     * Link to the wikipedia page for the airport
     */
    wiki_url: string | null;

    /**
     * IATA identifier for the airport if known
     */
    code_iata?: string | null;

    /**
     * ICAO identifier for the airport if known
     */
    code_icao?: string | null;

    /**
     * LID identifier for the airport if known
     */
    code_lid?: string | null;

    /**
     * Type of airport
     */
    type?:
      | 'Airport'
      | 'Heliport'
      | 'Seaplane Base'
      | 'Ultralight'
      | 'Stolport'
      | 'Gliderport'
      | 'Balloonport'
      | null;
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

export interface NearbyListParams {
  /**
   * The latitude of the point used to search for nearby airports
   */
  latitude: number;

  /**
   * The longitude of the point used to search for nearby airports
   */
  longitude: number;

  /**
   * The search radius to use for finding nearby airports (statue miles)
   */
  radius: number;

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
   * Return only nearby airports with Instrument Approaches (also limits results to
   * North American airports)
   */
  only_iap?: boolean;
}

export interface NearbyListFromAirportParams {
  /**
   * The search radius to use for finding nearby airports (statue miles)
   */
  radius: number;

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
   * Return only nearby airports with Instrument Approaches (also limits results to
   * North American airports)
   */
  only_iap?: boolean;
}

export declare namespace Nearby {
  export {
    type NearbyListResponse as NearbyListResponse,
    type NearbyListFromAirportResponse as NearbyListFromAirportResponse,
    type NearbyListParams as NearbyListParams,
    type NearbyListFromAirportParams as NearbyListFromAirportParams,
  };
}
