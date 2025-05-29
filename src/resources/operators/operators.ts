// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FlightsAPI from './flights';
import {
  FlightGetCountsResponse,
  FlightListArrivalsParams,
  FlightListArrivalsResponse,
  FlightListEnrouteParams,
  FlightListEnrouteResponse,
  FlightListParams,
  FlightListResponse,
  FlightListScheduledParams,
  FlightListScheduledResponse,
  Flights,
} from './flights';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Operators extends APIResource {
  flights: FlightsAPI.Flights = new FlightsAPI.Flights(this._client);

  /**
   * Returns information for an operator such as their name, ICAO/IATA codes,
   * headquarter location, etc.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OperatorRetrieveResponse> {
    return this._client.get(path`/operators/${id}`, options);
  }

  /**
   * Returns list of operator references (ICAO/IATA codes and URLs to access more
   * information).
   */
  list(
    query: OperatorListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OperatorListResponse> {
    return this._client.get('/operators', { query, ...options });
  }

  /**
   * Returns all possible matches for a given operator code (ICAO or IATA). An
   * optional country code can be provided to refine ambiguous IATA codes to a single
   * result. The country code should represent a country the operator operates
   * within.
   */
  getCanonical(
    id: string,
    query: OperatorGetCanonicalParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OperatorGetCanonicalResponse> {
    return this._client.get(path`/operators/${id}/canonical`, { query, ...options });
  }
}

export interface OperatorRetrieveResponse {
  /**
   * The operator's ICAO telephony name (callsign) used with air traffic control.
   */
  callsign: string | null;

  /**
   * Country where operator is headquartered.
   */
  country: string | null;

  /**
   * The operator's IATA code.
   */
  iata: string | null;

  /**
   * The operator's ICAO code.
   */
  icao: string | null;

  /**
   * Potentially a more specific location where the operator is based. May specify
   * city, state, province, etc.
   */
  location: string | null;

  /**
   * The operator's name. Typically the legal business name.
   */
  name: string;

  /**
   * Public phone number for the operator.
   */
  phone: string | null;

  /**
   * Shorter version of the operator's name. Typically the "doing business as" name,
   * when different than "name."
   */
  shortname: string | null;

  /**
   * URL of operator's website.
   */
  url: string | null;

  /**
   * URL of operator's Wikipedia page.
   */
  wiki_url: string | null;

  /**
   * An array of other possible operator matches
   */
  alternatives?: Array<OperatorRetrieveResponse.Alternative>;
}

export namespace OperatorRetrieveResponse {
  export interface Alternative {
    /**
     * The operator's ICAO telephony name (callsign) used with air traffic control.
     */
    callsign: string | null;

    /**
     * Country where operator is headquartered.
     */
    country: string | null;

    /**
     * The operator's IATA code.
     */
    iata: string | null;

    /**
     * The operator's ICAO code.
     */
    icao: string | null;

    /**
     * Potentially a more specific location where the operator is based. May specify
     * city, state, province, etc.
     */
    location: string | null;

    /**
     * The operator's name. Typically the legal business name.
     */
    name: string;

    /**
     * Public phone number for the operator.
     */
    phone: string | null;

    /**
     * Shorter version of the operator's name. Typically the "doing business as" name,
     * when different than "name."
     */
    shortname: string | null;

    /**
     * URL of operator's website.
     */
    url: string | null;

    /**
     * URL of operator's Wikipedia page.
     */
    wiki_url: string | null;
  }
}

export interface OperatorListResponse {
  /**
   * Object containing links to related resources.
   */
  links: OperatorListResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;

  operators: Array<OperatorListResponse.Operator>;
}

export namespace OperatorListResponse {
  /**
   * Object containing links to related resources.
   */
  export interface Links {
    /**
     * A link to the next set of records in a collection.
     */
    next: string;
  }

  export interface Operator {
    /**
     * ICAO identifier if known, otherwise IATA.
     */
    code: string;

    /**
     * The AeroAPI URL to more information about the operator
     */
    operator_info_url: string;
  }
}

export interface OperatorGetCanonicalResponse {
  operators: Array<OperatorGetCanonicalResponse.Operator>;
}

export namespace OperatorGetCanonicalResponse {
  export interface Operator {
    /**
     * Operator id for use in the API
     */
    id: string;

    /**
     * Operator id type
     */
    id_type: 'icao' | 'iata';
  }
}

export interface OperatorListParams {
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

export interface OperatorGetCanonicalParams {
  /**
   * An ISO 3166-1 alpha-2 country code.
   */
  country_code?: string;
}

Operators.Flights = Flights;

export declare namespace Operators {
  export {
    type OperatorRetrieveResponse as OperatorRetrieveResponse,
    type OperatorListResponse as OperatorListResponse,
    type OperatorGetCanonicalResponse as OperatorGetCanonicalResponse,
    type OperatorListParams as OperatorListParams,
    type OperatorGetCanonicalParams as OperatorGetCanonicalParams,
  };

  export {
    Flights as Flights,
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
