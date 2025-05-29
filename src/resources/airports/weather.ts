// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Weather extends APIResource {
  /**
   * Returns the weather forecast for an airport in the form of a decoded TAF
   * (Terminal Area Forecast). Only a single result is returned.
   *
   * @example
   * ```ts
   * const response = await client.airports.weather.getForecast(
   *   'id',
   * );
   * ```
   */
  getForecast(
    id: string,
    query: WeatherGetForecastParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WeatherGetForecastResponse> {
    return this._client.get(path`/airports/${id}/weather/forecast`, { query, ...options });
  }

  /**
   * Returns weather for an airport in the form of a decoded METAR, starting from the
   * latest report and working backwards in time as more data is requested. Data is
   * provided in parsed, human-readable, and raw formats.
   *
   * @example
   * ```ts
   * const response =
   *   await client.airports.weather.getObservations('id');
   * ```
   */
  getObservations(
    id: string,
    query: WeatherGetObservationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WeatherGetObservationsResponse> {
    return this._client.get(path`/airports/${id}/weather/observations`, { query, ...options });
  }
}

export interface WeatherGetForecastResponse {
  /**
   * The airport code of the report. LID/IATA will be used if airport lacks an ICAO
   * code.
   */
  airport_code: string;

  decoded_forecast: WeatherGetForecastResponse.DecodedForecast | null;

  /**
   * Array of raw forecast lines from the TAF
   */
  raw_forecast: Array<string>;

  /**
   * Datetime that the forecast was generated.
   */
  time: string;
}

export namespace WeatherGetForecastResponse {
  export interface DecodedForecast {
    end: string;

    lines: Array<DecodedForecast.Line>;

    start: string;
  }

  export namespace DecodedForecast {
    export interface Line {
      /**
       * Forecast pressure (percent)
       */
      barometric_pressure: number | null;

      clouds: Array<Line.Cloud>;

      /**
       * End of the effective period for this forecast line
       */
      end: string | null;

      /**
       * Icing forecast
       */
      icing_layers: string | null;

      /**
       * Significant weather forecast
       */
      significant_weather: string | null;

      /**
       * Start of the effective period for this forecast line
       */
      start: string;

      /**
       * Turbulence forecast
       */
      turbulence_layers: string | null;

      /**
       * The type of forecast line (forecast, from, temporary, becoming)
       */
      type: string;

      visibility: Line.Visibility | null;

      winds: Line.Winds | null;

      windshear: Line.Windshear | null;
    }

    export namespace Line {
      export interface Cloud {
        /**
         * Height (AGL) of cloud layer base
         */
        altitude: string | null;

        /**
         * Area of sky covered by the cloud layer (few 0-2 octas, scatterd 3-4 octas,
         * broken 5-7 octas, overcast 8 octas)
         */
        coverage: 'sky_clear' | 'few' | 'scattered' | 'broken' | 'overcast' | null;

        /**
         * Any special modifiers such as CB (cumulonimbus) or TCU (towering cumulonimbus)
         */
        special: string | null;

        /**
         * Raw TAF cloud symbol
         */
        symbol: string;
      }

      export interface Visibility {
        /**
         * Raw TAF visibility symbol
         */
        symbol: string;

        /**
         * Visibility units
         */
        units: string | null;

        /**
         * Numeric visibility (or "unlimited")
         */
        visibility: string;
      }

      export interface Winds {
        /**
         * Wind direction (0-360 or "variable")
         */
        direction: string;

        /**
         * Peak gusts for forecast
         */
        peak_gusts: number | null;

        /**
         * Wind speed
         */
        speed: number;

        /**
         * Raw TAF wind symbol
         */
        symbol: string;

        /**
         * Wind units
         */
        units: string | null;
      }

      export interface Windshear {
        /**
         * Wind direction of windshear (0-360 or "variable")
         */
        direction: string;

        /**
         * Altitude of low level wind shear occurrence
         */
        height: string;

        /**
         * Wind speed of windshear
         */
        speed: string;

        /**
         * Raw TAF windshear symbol
         */
        symbol: string;

        /**
         * Wind units of windshear
         */
        units: string | null;
      }
    }
  }
}

export interface WeatherGetObservationsResponse {
  /**
   * Object containing links to related resources.
   */
  links: WeatherGetObservationsResponse.Links | null;

  /**
   * Number of pages returned
   */
  num_pages: number;

  observations: Array<WeatherGetObservationsResponse.Observation>;
}

export namespace WeatherGetObservationsResponse {
  /**
   * Object containing links to related resources.
   */
  export interface Links {
    /**
     * A link to the next set of records in a collection.
     */
    next: string;
  }

  export interface Observation {
    /**
     * The airport code of the report. LID/IATA will be used if airport lacks an ICAO
     * code.
     */
    airport_code: string;

    /**
     * Human-friendly summary of clouds.
     */
    cloud_friendly: string | null;

    /**
     * Array of cloud data
     */
    clouds: Array<Observation.Cloud>;

    /**
     * Notable weather
     */
    conditions: string | null;

    /**
     * Air pressure (see pressure_units field for units)
     */
    pressure: number | null;

    /**
     * Units for air pressure
     */
    pressure_units: 'mb' | 'in Hg' | null;

    /**
     * Raw METAR report string
     */
    raw_data: string;

    /**
     * Relative humidity (percent)
     */
    relative_humidity: number | null;

    /**
     * Air temperature
     */
    temp_air: number | null;

    /**
     * Dewpoint temperature
     */
    temp_dewpoint: number | null;

    /**
     * Perceived temperature (e.g. wind chill)
     */
    temp_perceived: number | null;

    /**
     * Timestamp when report was collected
     */
    time: string;

    /**
     * Horizontal visibility distance (see visibility_units for units)
     */
    visibility: number | null;

    /**
     * Units for visibility
     */
    visibility_units: 'meters' | 'SM' | null;

    /**
     * Heading direction of wind (degrees)
     */
    wind_direction: number;

    /**
     * Human-friendly summary of winds
     */
    wind_friendly: string;

    /**
     * Wind speed
     */
    wind_speed: number;

    /**
     * Wind gust speed
     */
    wind_speed_gust: number;

    /**
     * Units for the wind speed and wind gusts
     */
    wind_units: 'MPS' | 'KT';
  }

  export namespace Observation {
    export interface Cloud {
      /**
       * Height in feet (AGL) of cloud base
       */
      altitude?: number | null;

      /**
       * Raw cloud symbol from the METAR report
       */
      symbol?: string;

      /**
       * Type of cloud. May be CLR, FEW, SCT, BKN, OVC, VV
       */
      type?: string;
    }
  }
}

export interface WeatherGetForecastParams {
  /**
   * If the requested airport does not have a weather conditions report then the
   * weather for the nearest airport within 30 miles will be returned instead.
   */
  return_nearby_weather?: boolean;

  /**
   * Timestamp from which to begin returning weather data in a 1 day range. Because
   * weather data is returned in reverse chronological order, all returned weather
   * reports will be from before this timestamp. If unspecified, weather is returned
   * starting from now up to or less than the user history limit, normally 14 days.
   */
  timestamp?: string;
}

export interface WeatherGetObservationsParams {
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
   * If the requested airport does not have a weather conditions report then the
   * weather for the nearest airport within 30 miles will be returned instead.
   */
  return_nearby_weather?: boolean;

  /**
   * Units to use for temperature fields.
   */
  temperature_units?: 'C' | 'F' | 'Celsius' | 'Fahrenheit';

  /**
   * Timestamp from which to begin returning weather data in a 1 day range. Because
   * weather data is returned in reverse chronological order, all returned weather
   * reports will be from before this timestamp. If unspecified, weather is returned
   * starting from now up to or less than the user history limit, normally 14 days.
   */
  timestamp?: string;
}

export declare namespace Weather {
  export {
    type WeatherGetForecastResponse as WeatherGetForecastResponse,
    type WeatherGetObservationsResponse as WeatherGetObservationsResponse,
    type WeatherGetForecastParams as WeatherGetForecastParams,
    type WeatherGetObservationsParams as WeatherGetObservationsParams,
  };
}
