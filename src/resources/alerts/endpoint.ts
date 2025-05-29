// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Endpoint extends APIResource {
  /**
   * Returns URL that will be POSTed to for alerts that are delivered via AeroAPI.
   *
   * @example
   * ```ts
   * const endpoint = await client.alerts.endpoint.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<EndpointRetrieveResponse> {
    return this._client.get('/alerts/endpoint', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Updates the default URL that will be POSTed to for alerts that are delivered via
   * AeroAPI. This sets the account-wide default URL that all alerts will be
   * delivered to unless the specific alert has a different delivery address
   * configured for it.
   *
   * @example
   * ```ts
   * await client.alerts.endpoint.update({
   *   url: 'https://example.com',
   * });
   * ```
   */
  update(body: EndpointUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/alerts/endpoint', {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/json; charset=utf-8', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Remove the default account-wide URL that will be POSTed to for alerts that are
   * not configured with a specific URL. This means that any alerts that are not
   * configured with a specific URL will not be delivered.
   *
   * @example
   * ```ts
   * await client.alerts.endpoint.delete();
   * ```
   */
  delete(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/alerts/endpoint', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Configuration for a URL to which AeroAPI alerts should be delivered via HTTP
 * POST. This is the default account-wide URL that all AeroAPI alerts will be
 * delivered to if the alert does not have a specific alert URL configured for it.
 */
export interface EndpointRetrieveResponse {
  /**
   * Default account-wide URL that will be POSTed to for flight alerts.
   */
  url: string | null;
}

export interface EndpointUpdateParams {
  /**
   * Default account-wide URL that will be POSTed to for flight alerts.
   */
  url: string | null;
}

export declare namespace Endpoint {
  export {
    type EndpointRetrieveResponse as EndpointRetrieveResponse,
    type EndpointUpdateParams as EndpointUpdateParams,
  };
}
