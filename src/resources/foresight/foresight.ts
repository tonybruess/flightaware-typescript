// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FlightsAPI from './flights/flights';
import {
  FlightRetrieveParams,
  FlightRetrievePositionResponse,
  FlightRetrieveResponse,
  Flights,
} from './flights/flights';

export class Foresight extends APIResource {
  flights: FlightsAPI.Flights = new FlightsAPI.Flights(this._client);
}

Foresight.Flights = Flights;

export declare namespace Foresight {
  export {
    Flights as Flights,
    type FlightRetrieveResponse as FlightRetrieveResponse,
    type FlightRetrievePositionResponse as FlightRetrievePositionResponse,
    type FlightRetrieveParams as FlightRetrieveParams,
  };
}
