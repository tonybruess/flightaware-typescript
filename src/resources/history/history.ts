// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AircraftAPI from './aircraft';
import { Aircraft, AircraftLastFlightResponse } from './aircraft';
import * as FlightsAPI from './flights';
import {
  FlightMapParams,
  FlightMapResponse,
  FlightRetrieveParams,
  FlightRetrieveResponse,
  FlightRouteResponse,
  FlightTrackParams,
  FlightTrackResponse,
  Flights,
} from './flights';
import * as AirportsAPI from './airports/airports';
import { Airports } from './airports/airports';

export class History extends APIResource {
  flights: FlightsAPI.Flights = new FlightsAPI.Flights(this._client);
  airports: AirportsAPI.Airports = new AirportsAPI.Airports(this._client);
  aircraft: AircraftAPI.Aircraft = new AircraftAPI.Aircraft(this._client);
}

History.Flights = Flights;
History.Airports = Airports;
History.Aircraft = Aircraft;

export declare namespace History {
  export {
    Flights as Flights,
    type FlightRetrieveResponse as FlightRetrieveResponse,
    type FlightMapResponse as FlightMapResponse,
    type FlightRouteResponse as FlightRouteResponse,
    type FlightTrackResponse as FlightTrackResponse,
    type FlightRetrieveParams as FlightRetrieveParams,
    type FlightMapParams as FlightMapParams,
    type FlightTrackParams as FlightTrackParams,
  };

  export { Airports as Airports };

  export { Aircraft as Aircraft, type AircraftLastFlightResponse as AircraftLastFlightResponse };
}
