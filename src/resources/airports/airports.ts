// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DelaysAPI from './delays';
import { DelayListParams, DelayListResponse, DelayRetrieveResponse, Delays } from './delays';
import * as FlightsAPI from './flights';
import {
  FlightGetCountsResponse,
  FlightListArrivalsParams,
  FlightListArrivalsResponse,
  FlightListDeparturesParams,
  FlightListDeparturesResponse,
  FlightListParams,
  FlightListResponse,
  FlightListScheduledArrivalsParams,
  FlightListScheduledArrivalsResponse,
  FlightListScheduledDeparturesParams,
  FlightListScheduledDeparturesResponse,
  FlightListToDestinationParams,
  FlightListToDestinationResponse,
  Flights,
} from './flights';
import * as NearbyAPI from './nearby';
import {
  Nearby,
  NearbyListFromAirportParams,
  NearbyListFromAirportResponse,
  NearbyListParams,
  NearbyListResponse,
} from './nearby';
import * as WeatherAPI from './weather';
import {
  Weather,
  WeatherGetForecastParams,
  WeatherGetForecastResponse,
  WeatherGetObservationsParams,
  WeatherGetObservationsResponse,
} from './weather';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Airports extends APIResource {
  nearby: NearbyAPI.Nearby = new NearbyAPI.Nearby(this._client);
  delays: DelaysAPI.Delays = new DelaysAPI.Delays(this._client);
  flights: FlightsAPI.Flights = new FlightsAPI.Flights(this._client);
  weather: WeatherAPI.Weather = new WeatherAPI.Weather(this._client);

  /**
   * Returns information about an airport given an ICAO or LID airport code such as
   * KLAX, KIAH, O07, etc. Data returned includes airport name, city, state (when
   * known), latitude, longitude, and timezone.
   *
   * @example
   * ```ts
   * const airport = await client.airports.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AirportRetrieveResponse> {
    return this._client.get(path`/airports/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Returns the ICAO identifiers of all known airports. For airports that do not
   * have an ICAO identifier, the FAA LID identifier will be used. Links for further
   * information about each airport are included.
   *
   * @example
   * ```ts
   * const airports = await client.airports.list();
   * ```
   */
  list(
    query: AirportListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AirportListResponse> {
    return this._client.get('/airports', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Returns a list of ICAO airport codes corresponding to the given IATA or LID
   * airport code. IATA codes can be identical to some LID codes, so if id_type is
   * specified, only 1 ICAO code will be returned. If no id_type is specified and
   * there are two possible ICAO codes, both will be returned.
   *
   * @example
   * ```ts
   * const response = await client.airports.getCanonicalCode(
   *   'id',
   * );
   * ```
   */
  getCanonicalCode(
    id: string,
    query: AirportGetCanonicalCodeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AirportGetCanonicalCodeResponse> {
    return this._client.get(path`/airports/${id}/canonical`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Returns information about assigned IFR routings between two airports.
   *
   * @example
   * ```ts
   * const response = await client.airports.getRoutes(
   *   'dest_id',
   *   { id: 'id' },
   * );
   * ```
   */
  getRoutes(
    destID: string,
    params: AirportGetRoutesParams,
    options?: RequestOptions,
  ): APIPromise<AirportGetRoutesResponse> {
    const { id, ...query } = params;
    return this._client.get(path`/airports/${id}/routes/${destID}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }
}

export interface AirportRetrieveResponse {
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
   * Height above Mean Sea Level (MSL)
   */
  elevation: number;

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
   * An array of other possible airport matches
   */
  alternatives?: Array<AirportRetrieveResponse.Alternative>;

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

export namespace AirportRetrieveResponse {
  export interface Alternative {
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
     * Height above Mean Sea Level (MSL)
     */
    elevation: number;

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
}

export interface AirportListResponse {
  airports: Array<AirportListResponse.Airport | null>;

  /**
   * Object containing links to related resources.
   */
  links: AirportListResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;
}

export namespace AirportListResponse {
  export interface Airport {
    /**
     * The URL to more information about the airport.
     */
    airport_info_url: string | null;

    /**
     * ICAO identifier if known, otherwise IATA or LID. For position-only flights, this
     * may also be a string indicating the location where tracking of the flight
     * began/ended.
     */
    code: string;
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

export interface AirportGetCanonicalCodeResponse {
  airports: Array<AirportGetCanonicalCodeResponse.Airport>;
}

export namespace AirportGetCanonicalCodeResponse {
  export interface Airport {
    /**
     * Canonical airport code. This is the code by which a given airport (and its
     * flights) can be accessed in AeroAPI.
     */
    id: string;

    /**
     * Type of airport code given in id
     */
    id_type: 'icao' | 'iata' | 'lid';
  }
}

export interface AirportGetRoutesResponse {
  /**
   * Object containing links to related resources.
   */
  links: AirportGetRoutesResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;

  routes: Array<AirportGetRoutesResponse.Route>;
}

export namespace AirportGetRoutesResponse {
  /**
   * Object containing links to related resources.
   */
  export interface Links {
    /**
     * A link to the next set of records in a collection.
     */
    next: string;
  }

  export interface Route {
    /**
     * List of aircraft types that have filed this route
     */
    aircraft_types: Array<string>;

    /**
     * The number of flights with this filed route
     */
    count: number;

    /**
     * The highest altitude filed for the route (hundreds of feet)
     */
    filed_altitude_max: number;

    /**
     * The lowest altitude filed for the route (hundreds of feet)
     */
    filed_altitude_min: number;

    /**
     * The latest departure time for a flight operating on this route
     */
    last_departure_time: string;

    /**
     * The IFR route assigned
     */
    route: string;

    /**
     * The distance as filed for the route. May vary from the actual distance flown.
     * Includes units in string.
     */
    route_distance: string;
  }
}

export interface AirportListParams {
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

export interface AirportGetCanonicalCodeParams {
  /**
   * Type of airport code provided in the id parameter
   */
  id_type?: 'iata' | 'lid' | 'icao';
}

export interface AirportGetRoutesParams {
  /**
   * Path param: ICAO, IATA or LID ID of destination airport to fetch.
   * [ICAO is highly preferred](/aeroapi/portal/resources#icaoCode) to prevent
   * ambiguity.
   */
  id: string;

  /**
   * Query param: Opaque value used to get the next batch of data from a paged
   * collection.
   */
  cursor?: string;

  /**
   * Query param: Maximum filed plan age of flights to consider. Can be a value less
   * than or equal to 14 days (2 weeks) OR 1 month OR 1 year.
   */
  max_file_age?: string;

  /**
   * Query param: Maximum number of pages to fetch. This is an upper limit and not a
   * guarantee of how many pages will be returned.
   */
  max_pages?: number;

  /**
   * Query param: Field to sort results by. "count" will sort results by the route
   * filing count (descending). "last_departure_time" will sort results by the latest
   * scheduled departure time for that route (descending).
   */
  sort_by?: 'count' | 'last_departure_time';
}

Airports.Nearby = Nearby;
Airports.Delays = Delays;
Airports.Flights = Flights;
Airports.Weather = Weather;

export declare namespace Airports {
  export {
    type AirportRetrieveResponse as AirportRetrieveResponse,
    type AirportListResponse as AirportListResponse,
    type AirportGetCanonicalCodeResponse as AirportGetCanonicalCodeResponse,
    type AirportGetRoutesResponse as AirportGetRoutesResponse,
    type AirportListParams as AirportListParams,
    type AirportGetCanonicalCodeParams as AirportGetCanonicalCodeParams,
    type AirportGetRoutesParams as AirportGetRoutesParams,
  };

  export {
    Nearby as Nearby,
    type NearbyListResponse as NearbyListResponse,
    type NearbyListFromAirportResponse as NearbyListFromAirportResponse,
    type NearbyListParams as NearbyListParams,
    type NearbyListFromAirportParams as NearbyListFromAirportParams,
  };

  export {
    Delays as Delays,
    type DelayRetrieveResponse as DelayRetrieveResponse,
    type DelayListResponse as DelayListResponse,
    type DelayListParams as DelayListParams,
  };

  export {
    Flights as Flights,
    type FlightListResponse as FlightListResponse,
    type FlightGetCountsResponse as FlightGetCountsResponse,
    type FlightListArrivalsResponse as FlightListArrivalsResponse,
    type FlightListDeparturesResponse as FlightListDeparturesResponse,
    type FlightListScheduledArrivalsResponse as FlightListScheduledArrivalsResponse,
    type FlightListScheduledDeparturesResponse as FlightListScheduledDeparturesResponse,
    type FlightListToDestinationResponse as FlightListToDestinationResponse,
    type FlightListParams as FlightListParams,
    type FlightListArrivalsParams as FlightListArrivalsParams,
    type FlightListDeparturesParams as FlightListDeparturesParams,
    type FlightListScheduledArrivalsParams as FlightListScheduledArrivalsParams,
    type FlightListScheduledDeparturesParams as FlightListScheduledDeparturesParams,
    type FlightListToDestinationParams as FlightListToDestinationParams,
  };

  export {
    Weather as Weather,
    type WeatherGetForecastResponse as WeatherGetForecastResponse,
    type WeatherGetObservationsResponse as WeatherGetObservationsResponse,
    type WeatherGetForecastParams as WeatherGetForecastParams,
    type WeatherGetObservationsParams as WeatherGetObservationsParams,
  };
}
