// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FlightsAPI from './flights';
import {
  FlightArrivalsParams,
  FlightArrivalsResponse,
  FlightDeparturesParams,
  FlightDeparturesResponse,
  Flights,
} from './flights';

export class Airports extends APIResource {
  flights: FlightsAPI.Flights = new FlightsAPI.Flights(this._client);
}

Airports.Flights = Flights;

export declare namespace Airports {
  export {
    Flights as Flights,
    type FlightArrivalsResponse as FlightArrivalsResponse,
    type FlightDeparturesResponse as FlightDeparturesResponse,
    type FlightArrivalsParams as FlightArrivalsParams,
    type FlightDeparturesParams as FlightDeparturesParams,
  };
}
