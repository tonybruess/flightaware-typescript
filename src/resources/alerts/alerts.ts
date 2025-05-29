// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EndpointAPI from './endpoint';
import { Endpoint, EndpointRetrieveResponse, EndpointUpdateParams } from './endpoint';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Alerts extends APIResource {
  endpoint: EndpointAPI.Endpoint = new EndpointAPI.Endpoint(this._client);

  /**
   * Create a new AeroAPI flight alert. When the alert is triggered, a callback
   * mechanism will be used to notify the address set via the /alerts/endpoint
   * endpoint. Each callback will be charged as a query and count towards usage for
   * the AeroAPI key that created the alert. If this key is disabled or removed, the
   * alert will no longer be available. If a target_url is provided, then this
   * specific alert will be delivered to that address regardless of the adress set
   * via the /alerts/endpoint endpoint. Creating more than 50 duplicate alerts with
   * the exact same configuration will result in a 400 error.
   *
   * @example
   * ```ts
   * await client.alerts.create();
   * ```
   */
  create(body: AlertCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/alerts', {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/json; charset=utf-8', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns the configuration data for an alert with the specified ID.
   *
   * @example
   * ```ts
   * const alert = await client.alerts.retrieve(0);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AlertRetrieveResponse> {
    return this._client.get(path`/alerts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Modifies the configuration for an alert with the specified ID. If a target URL
   * address is provided, then the alert will be delivered to that address even if it
   * is different than the default account-wide address set through the
   * alerts/endpoint endpoint. Updating an alert that was created with a different
   * AeroAPI key is possible, but will not change the AeroAPI key that the alert is
   * associated with for usage.
   *
   * @example
   * ```ts
   * await client.alerts.update(0);
   * ```
   */
  update(id: number, body: AlertUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/alerts/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/json; charset=utf-8', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all configured alerts for the FlightAware account (this includes alerts
   * configured through other means by the FlightAware user owning the AeroAPI
   * account like FlightAware's website or mobile apps).
   *
   * @example
   * ```ts
   * const alerts = await client.alerts.list();
   * ```
   */
  list(
    query: AlertListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlertListResponse> {
    return this._client.get('/alerts', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/json; charset=utf-8' }, options?.headers]),
    });
  }

  /**
   * Deletes specific alert with given ID
   *
   * @example
   * ```ts
   * await client.alerts.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/alerts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AlertRetrieveResponse {
  /**
   * Unique ID for alert, can be used to update or delete alert.
   */
  id?: number;

  /**
   * Aircraft type ICAO code to alert on.
   */
  aircraft_type?: string | null;

  /**
   * Time that the alert was last modified.
   */
  changed?: string;

  /**
   * Time that the alert was created.
   */
  created?: string;

  /**
   * Server-generated textual description of alert. May include carrier, flight
   * number, origin, destination, etc.
   */
  description?: string;

  /**
   * Destination airport ICAO, IATA, or LID code to alert on.
   */
  destination?: string | null;

  /**
   * Destination airport IATA code to alert on.
   */
  destination_iata?: string | null;

  /**
   * Destination airport ICAO code to alert on.
   */
  destination_icao?: string | null;

  /**
   * Destination airport LID code to alert on.
   */
  destination_lid?: string | null;

  /**
   * Whether alert is enabled.
   */
  enabled?: boolean;

  /**
   * End date of alert (inclusive). Should be in departure airport's timezone.
   */
  end?: string | null;

  /**
   * How many minutes before a flight's ETA that an alert should be delivered. Alerts
   * will only be delivered after the flight has been in the air for at least 15
   * minutes. Set to 0 to disable.
   */
  eta?: number;

  events?: AlertRetrieveResponse.Events;

  /**
   * Ident to alert on. This value may be modified based on codeshare resolution. If
   * that occurs, the originally provided ident will be preserved in the user_ident
   * field.
   */
  ident?: string | null;

  /**
   * IATA ident to alert on
   */
  ident_iata?: string | null;

  /**
   * ICAO ident to alert on
   */
  ident_icao?: string | null;

  /**
   * List of minutes before a flight's arrival time that alerts should be delivered.
   * Limited to 15 minutes after actual departure and available throughout the
   * duration of the flight. No more than 10 impending arrival alerts can be
   * configured for an individual flight. By default, this field is set to null and
   * when set to either null or an empty array, this feature will not be configured
   * for the alert.
   */
  impending_arrival?: Array<number> | null;

  /**
   * List of minutes before a flight's departure time that alerts should be
   * delivered. Limited to 60 minutes prior to estimated departure until actual
   * departure, implying a valid range of 60 - 5 minutes. No more than 10 impending
   * departure alerts can be configured for an individual flight. By default, this
   * field is set to null and when set to either null or an empty array, this feature
   * will not be configured for the alert.
   */
  impending_departure?: Array<number> | null;

  /**
   * Origin airport ICAO, IATA, or LID code to alert on.
   */
  origin?: string | null;

  /**
   * Origin airport IATA code to alert on.
   */
  origin_iata?: string | null;

  /**
   * Origin airport ICAO code to alert on.
   */
  origin_icao?: string | null;

  /**
   * Origin airport LID code to alert on.
   */
  origin_lid?: string | null;

  /**
   * Start date of alert. Should be in departure airport's timezone.
   */
  start?: string | null;

  /**
   * Alert specific URL to deliver to. If null, then the alert will be delivered to
   * the configured account-wide alert URL target.
   */
  target_url?: string | null;

  /**
   * Originally specified ident.
   */
  user_ident?: string | null;
}

export namespace AlertRetrieveResponse {
  export interface Events {
    /**
     * Whether alerts should be delivered on arrival. FlightAware Global customers will
     * also receive \"taxi stop\" Ready To Taxi™ alerts unless they've opted out.
     */
    arrival: boolean;

    /**
     * Whether alerts should be delivered on cancellation by the airline
     */
    cancelled: boolean;

    /**
     * Whether alerts should be delivered on departure. FlightAware Global customers
     * will also receive \"power on\" and \"taxi start\" Ready To Taxi™ alerts unless
     * they've opted out.
     */
    departure: boolean;

    /**
     * Whether alerts should be delivered on diversion
     */
    diverted: boolean;

    /**
     * Whether alerts should be delivered on filing
     */
    filed: boolean;

    /**
     * Whether alerts should be delivered on end datetime of hold exit (will be null
     * for hold_entry event)
     */
    hold_end: boolean;

    /**
     * Whether alerts should be delivered on start datetime of hold detection
     */
    hold_start: boolean;

    /**
     * Whether alerts should be delivered when aircraft enters arrival gate
     */
    in: boolean;

    /**
     * Whether alerts should be delivered when aircraft leaves the runway
     */
    off: boolean;

    /**
     * Whether alerts should be delivered when aircraft touches down on runway
     */
    on: boolean;

    /**
     * Whether alerts should be delivered when aircraft leaves departure gate
     */
    out: boolean;
  }
}

export interface AlertListResponse {
  alerts: Array<AlertListResponse.Alert>;

  /**
   * Object containing links to related resources.
   */
  links?: AlertListResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages?: number;
}

export namespace AlertListResponse {
  export interface Alert {
    /**
     * Unique ID for alert, can be used to update or delete alert.
     */
    id?: number;

    /**
     * Aircraft type ICAO code to alert on.
     */
    aircraft_type?: string | null;

    /**
     * Time that the alert was last modified.
     */
    changed?: string;

    /**
     * Time that the alert was created.
     */
    created?: string;

    /**
     * Server-generated textual description of alert. May include carrier, flight
     * number, origin, destination, etc.
     */
    description?: string;

    /**
     * Destination airport ICAO, IATA, or LID code to alert on.
     */
    destination?: string | null;

    /**
     * Destination airport IATA code to alert on.
     */
    destination_iata?: string | null;

    /**
     * Destination airport ICAO code to alert on.
     */
    destination_icao?: string | null;

    /**
     * Destination airport LID code to alert on.
     */
    destination_lid?: string | null;

    /**
     * Whether alert is enabled.
     */
    enabled?: boolean;

    /**
     * End date of alert (inclusive). Should be in departure airport's timezone.
     */
    end?: string | null;

    /**
     * How many minutes before a flight's ETA that an alert should be delivered. Alerts
     * will only be delivered after the flight has been in the air for at least 15
     * minutes. Set to 0 to disable.
     */
    eta?: number;

    events?: Alert.Events;

    /**
     * Ident to alert on. This value may be modified based on codeshare resolution. If
     * that occurs, the originally provided ident will be preserved in the user_ident
     * field.
     */
    ident?: string | null;

    /**
     * IATA ident to alert on
     */
    ident_iata?: string | null;

    /**
     * ICAO ident to alert on
     */
    ident_icao?: string | null;

    /**
     * List of minutes before a flight's arrival time that alerts should be delivered.
     * Limited to 15 minutes after actual departure and available throughout the
     * duration of the flight. No more than 10 impending arrival alerts can be
     * configured for an individual flight. By default, this field is set to null and
     * when set to either null or an empty array, this feature will not be configured
     * for the alert.
     */
    impending_arrival?: Array<number> | null;

    /**
     * List of minutes before a flight's departure time that alerts should be
     * delivered. Limited to 60 minutes prior to estimated departure until actual
     * departure, implying a valid range of 60 - 5 minutes. No more than 10 impending
     * departure alerts can be configured for an individual flight. By default, this
     * field is set to null and when set to either null or an empty array, this feature
     * will not be configured for the alert.
     */
    impending_departure?: Array<number> | null;

    /**
     * Origin airport ICAO, IATA, or LID code to alert on.
     */
    origin?: string | null;

    /**
     * Origin airport IATA code to alert on.
     */
    origin_iata?: string | null;

    /**
     * Origin airport ICAO code to alert on.
     */
    origin_icao?: string | null;

    /**
     * Origin airport LID code to alert on.
     */
    origin_lid?: string | null;

    /**
     * Start date of alert. Should be in departure airport's timezone.
     */
    start?: string | null;

    /**
     * Alert specific URL to deliver to. If null, then the alert will be delivered to
     * the configured account-wide alert URL target.
     */
    target_url?: string | null;

    /**
     * Originally specified ident.
     */
    user_ident?: string | null;
  }

  export namespace Alert {
    export interface Events {
      /**
       * Whether alerts should be delivered on arrival. FlightAware Global customers will
       * also receive \"taxi stop\" Ready To Taxi™ alerts unless they've opted out.
       */
      arrival: boolean;

      /**
       * Whether alerts should be delivered on cancellation by the airline
       */
      cancelled: boolean;

      /**
       * Whether alerts should be delivered on departure. FlightAware Global customers
       * will also receive \"power on\" and \"taxi start\" Ready To Taxi™ alerts unless
       * they've opted out.
       */
      departure: boolean;

      /**
       * Whether alerts should be delivered on diversion
       */
      diverted: boolean;

      /**
       * Whether alerts should be delivered on filing
       */
      filed: boolean;

      /**
       * Whether alerts should be delivered on end datetime of hold exit (will be null
       * for hold_entry event)
       */
      hold_end: boolean;

      /**
       * Whether alerts should be delivered on start datetime of hold detection
       */
      hold_start: boolean;

      /**
       * Whether alerts should be delivered when aircraft enters arrival gate
       */
      in: boolean;

      /**
       * Whether alerts should be delivered when aircraft leaves the runway
       */
      off: boolean;

      /**
       * Whether alerts should be delivered when aircraft touches down on runway
       */
      on: boolean;

      /**
       * Whether alerts should be delivered when aircraft leaves departure gate
       */
      out: boolean;
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

export interface AlertCreateParams {
  /**
   * Aircraft type ICAO code to alert on.
   */
  aircraft_type?: string | null;

  /**
   * Destination airport ICAO, IATA, or LID code to alert on.
   */
  destination?: string | null;

  /**
   * End date of alert (inclusive). Should be in departure airport's timezone.
   */
  end?: string | null;

  /**
   * How many minutes before a flight's ETA that an alert should be delivered. Alerts
   * will only be delivered after the flight has been in the air for at least 15
   * minutes. Set to 0 to disable.
   */
  eta?: number;

  events?: AlertCreateParams.Events;

  /**
   * Ident to alert on. This value may be modified based on codeshare resolution. If
   * that occurs, the originally provided ident will be preserved in the user_ident
   * field.
   */
  ident?: string | null;

  /**
   * List of minutes before a flight's arrival time that alerts should be delivered.
   * Limited to 15 minutes after actual departure and available throughout the
   * duration of the flight. No more than 10 impending arrival alerts can be
   * configured for an individual flight. By default, this field is set to null and
   * when set to either null or an empty array, this feature will not be configured
   * for the alert.
   */
  impending_arrival?: Array<number> | null;

  /**
   * List of minutes before a flight's departure time that alerts should be
   * delivered. Limited to 60 minutes prior to estimated departure until actual
   * departure, implying a valid range of 60 - 5 minutes. No more than 10 impending
   * departure alerts can be configured for an individual flight. By default, this
   * field is set to null and when set to either null or an empty array, this feature
   * will not be configured for the alert.
   */
  impending_departure?: Array<number> | null;

  /**
   * Reject the new alert if the estimated number of triggered alerts per week based
   * on historical flight trends would exceed this value. The threshold only
   * considers alerts triggered by this alert config (it is not a total for all
   * previously configured alerts). Check is only applied at alert
   * creation/modification, and does and does not prevent alerts from being delivered
   * even if they exceed the given amount. If your alert request is rejected,
   * consider adding additional filter criteria for the alert creation to further
   * refine the config. If max_weekly is not specified for a standard customer, we
   * default the max_weekly to 1000. For a premium customer, we default the
   * max_weekly to 4000.
   */
  max_weekly?: number;

  /**
   * Origin airport ICAO, IATA, or LID code to alert on.
   */
  origin?: string | null;

  /**
   * Start date of alert. Should be in departure airport's timezone.
   */
  start?: string | null;

  /**
   * Alert specific URL to deliver to. If null, then the alert will be delivered to
   * the configured account-wide alert URL target.
   */
  target_url?: string | null;
}

export namespace AlertCreateParams {
  export interface Events {
    /**
     * Whether alerts should be delivered on arrival. FlightAware Global customers will
     * also receive \"taxi stop\" Ready To Taxi™ alerts unless they've opted out.
     */
    arrival: boolean;

    /**
     * Whether alerts should be delivered on cancellation by the airline
     */
    cancelled: boolean;

    /**
     * Whether alerts should be delivered on departure. FlightAware Global customers
     * will also receive \"power on\" and \"taxi start\" Ready To Taxi™ alerts unless
     * they've opted out.
     */
    departure: boolean;

    /**
     * Whether alerts should be delivered on diversion
     */
    diverted: boolean;

    /**
     * Whether alerts should be delivered on filing
     */
    filed: boolean;

    /**
     * Whether alerts should be delivered on end datetime of hold exit (will be null
     * for hold_entry event)
     */
    hold_end: boolean;

    /**
     * Whether alerts should be delivered on start datetime of hold detection
     */
    hold_start: boolean;

    /**
     * Whether alerts should be delivered when aircraft enters arrival gate
     */
    in: boolean;

    /**
     * Whether alerts should be delivered when aircraft leaves the runway
     */
    off: boolean;

    /**
     * Whether alerts should be delivered when aircraft touches down on runway
     */
    on: boolean;

    /**
     * Whether alerts should be delivered when aircraft leaves departure gate
     */
    out: boolean;
  }
}

export interface AlertUpdateParams {
  /**
   * Aircraft type ICAO code to alert on.
   */
  aircraft_type?: string | null;

  /**
   * Destination airport ICAO, IATA, or LID code to alert on.
   */
  destination?: string | null;

  /**
   * Whether alert is enabled.
   */
  enabled?: boolean;

  /**
   * End date of alert (inclusive). Should be in departure airport's timezone.
   */
  end?: string | null;

  /**
   * How many minutes before a flight's ETA that an alert should be delivered. Alerts
   * will only be delivered after the flight has been in the air for at least 15
   * minutes. Set to 0 to disable.
   */
  eta?: number;

  events?: AlertUpdateParams.Events;

  /**
   * Ident to alert on. This value may be modified based on codeshare resolution. If
   * that occurs, the originally provided ident will be preserved in the user_ident
   * field.
   */
  ident?: string | null;

  /**
   * List of minutes before a flight's arrival time that alerts should be delivered.
   * Limited to 15 minutes after actual departure and available throughout the
   * duration of the flight. No more than 10 impending arrival alerts can be
   * configured for an individual flight. By default, this field is set to null and
   * when set to either null or an empty array, this feature will not be configured
   * for the alert.
   */
  impending_arrival?: Array<number> | null;

  /**
   * List of minutes before a flight's departure time that alerts should be
   * delivered. Limited to 60 minutes prior to estimated departure until actual
   * departure, implying a valid range of 60 - 5 minutes. No more than 10 impending
   * departure alerts can be configured for an individual flight. By default, this
   * field is set to null and when set to either null or an empty array, this feature
   * will not be configured for the alert.
   */
  impending_departure?: Array<number> | null;

  /**
   * Reject the new alert if the estimated number of triggered alerts per week based
   * on historical flight trends would exceed this value. The threshold only
   * considers alerts triggered by this alert config (it is not a total for all
   * previously configured alerts). Check is only applied at alert
   * creation/modification, and does and does not prevent alerts from being delivered
   * even if they exceed the given amount. If your alert request is rejected,
   * consider adding additional filter criteria for the alert creation to further
   * refine the config. If max_weekly is not specified for a standard customer, we
   * default the max_weekly to 1000. For a premium customer, we default the
   * max_weekly to 4000.
   */
  max_weekly?: number;

  /**
   * Origin airport ICAO, IATA, or LID code to alert on.
   */
  origin?: string | null;

  /**
   * Start date of alert. Should be in departure airport's timezone.
   */
  start?: string | null;

  /**
   * Alert specific URL to deliver to. If null, then the alert will be delivered to
   * the configured account-wide alert URL target.
   */
  target_url?: string | null;
}

export namespace AlertUpdateParams {
  export interface Events {
    /**
     * Whether alerts should be delivered on arrival. FlightAware Global customers will
     * also receive \"taxi stop\" Ready To Taxi™ alerts unless they've opted out.
     */
    arrival: boolean;

    /**
     * Whether alerts should be delivered on cancellation by the airline
     */
    cancelled: boolean;

    /**
     * Whether alerts should be delivered on departure. FlightAware Global customers
     * will also receive \"power on\" and \"taxi start\" Ready To Taxi™ alerts unless
     * they've opted out.
     */
    departure: boolean;

    /**
     * Whether alerts should be delivered on diversion
     */
    diverted: boolean;

    /**
     * Whether alerts should be delivered on filing
     */
    filed: boolean;

    /**
     * Whether alerts should be delivered on end datetime of hold exit (will be null
     * for hold_entry event)
     */
    hold_end: boolean;

    /**
     * Whether alerts should be delivered on start datetime of hold detection
     */
    hold_start: boolean;

    /**
     * Whether alerts should be delivered when aircraft enters arrival gate
     */
    in: boolean;

    /**
     * Whether alerts should be delivered when aircraft leaves the runway
     */
    off: boolean;

    /**
     * Whether alerts should be delivered when aircraft touches down on runway
     */
    on: boolean;

    /**
     * Whether alerts should be delivered when aircraft leaves departure gate
     */
    out: boolean;
  }
}

export interface AlertListParams {
  /**
   * Opaque value used to get the next batch of data from a paged collection.
   */
  cursor?: string;

  /**
   * Maximum number of pages to fetch. This is an upper limit and not a guarantee of
   * how many pages will be returned. Defaults to 0, meaning no maximum is set. Set
   * this parameter if your call is timing out (most likely due to a high number of
   * alerts).
   */
  max_pages?: number;
}

Alerts.Endpoint = Endpoint;

export declare namespace Alerts {
  export {
    type AlertRetrieveResponse as AlertRetrieveResponse,
    type AlertListResponse as AlertListResponse,
    type AlertCreateParams as AlertCreateParams,
    type AlertUpdateParams as AlertUpdateParams,
    type AlertListParams as AlertListParams,
  };

  export {
    Endpoint as Endpoint,
    type EndpointRetrieveResponse as EndpointRetrieveResponse,
    type EndpointUpdateParams as EndpointUpdateParams,
  };
}
