# Flights

Types:

- <code><a href="./src/resources/flights/flights.ts">FlightRetrieveResponse</a></code>
- <code><a href="./src/resources/flights/flights.ts">FlightGetCanonicalIdentResponse</a></code>
- <code><a href="./src/resources/flights/flights.ts">FlightGetCurrentPositionResponse</a></code>
- <code><a href="./src/resources/flights/flights.ts">FlightGetFiledRouteResponse</a></code>
- <code><a href="./src/resources/flights/flights.ts">FlightGetTrackResponse</a></code>
- <code><a href="./src/resources/flights/flights.ts">FlightGetTrackMapResponse</a></code>

Methods:

- <code title="get /flights/{ident}">client.flights.<a href="./src/resources/flights/flights.ts">retrieve</a>(ident, { ...params }) -> FlightRetrieveResponse</code>
- <code title="get /flights/{ident}/canonical">client.flights.<a href="./src/resources/flights/flights.ts">getCanonicalIdent</a>(ident, { ...params }) -> FlightGetCanonicalIdentResponse</code>
- <code title="get /flights/{id}/position">client.flights.<a href="./src/resources/flights/flights.ts">getCurrentPosition</a>(id) -> FlightGetCurrentPositionResponse</code>
- <code title="get /flights/{id}/route">client.flights.<a href="./src/resources/flights/flights.ts">getFiledRoute</a>(id) -> FlightGetFiledRouteResponse</code>
- <code title="get /flights/{id}/track">client.flights.<a href="./src/resources/flights/flights.ts">getTrack</a>(id, { ...params }) -> FlightGetTrackResponse</code>
- <code title="get /flights/{id}/map">client.flights.<a href="./src/resources/flights/flights.ts">getTrackMap</a>(id, { ...params }) -> FlightGetTrackMapResponse</code>
- <code title="post /flights/{ident}/intents">client.flights.<a href="./src/resources/flights/flights.ts">submitIntent</a>(ident, { ...params }) -> void</code>

## Search

Types:

- <code><a href="./src/resources/flights/search.ts">SearchAdvancedSearchResponse</a></code>
- <code><a href="./src/resources/flights/search.ts">SearchCountResponse</a></code>
- <code><a href="./src/resources/flights/search.ts">SearchFindPositionsResponse</a></code>
- <code><a href="./src/resources/flights/search.ts">SearchPerformResponse</a></code>

Methods:

- <code title="get /flights/search/advanced">client.flights.search.<a href="./src/resources/flights/search.ts">advancedSearch</a>({ ...params }) -> SearchAdvancedSearchResponse</code>
- <code title="get /flights/search/count">client.flights.search.<a href="./src/resources/flights/search.ts">count</a>({ ...params }) -> SearchCountResponse</code>
- <code title="get /flights/search/positions">client.flights.search.<a href="./src/resources/flights/search.ts">findPositions</a>({ ...params }) -> SearchFindPositionsResponse</code>
- <code title="get /flights/search">client.flights.search.<a href="./src/resources/flights/search.ts">perform</a>({ ...params }) -> SearchPerformResponse</code>

# Foresight

## Flights

Types:

- <code><a href="./src/resources/foresight/flights/flights.ts">FlightRetrieveResponse</a></code>
- <code><a href="./src/resources/foresight/flights/flights.ts">FlightRetrievePositionResponse</a></code>

Methods:

- <code title="get /foresight/flights/{ident}">client.foresight.flights.<a href="./src/resources/foresight/flights/flights.ts">retrieve</a>(ident, { ...params }) -> FlightRetrieveResponse</code>
- <code title="get /foresight/flights/{id}/position">client.foresight.flights.<a href="./src/resources/foresight/flights/flights.ts">retrievePosition</a>(id) -> FlightRetrievePositionResponse</code>

### Search

Types:

- <code><a href="./src/resources/foresight/flights/search.ts">SearchAdvancedResponse</a></code>

Methods:

- <code title="get /foresight/flights/search/advanced">client.foresight.flights.search.<a href="./src/resources/foresight/flights/search.ts">advanced</a>({ ...params }) -> SearchAdvancedResponse</code>

# Airports

Types:

- <code><a href="./src/resources/airports/airports.ts">AirportRetrieveResponse</a></code>
- <code><a href="./src/resources/airports/airports.ts">AirportListResponse</a></code>
- <code><a href="./src/resources/airports/airports.ts">AirportGetCanonicalCodeResponse</a></code>
- <code><a href="./src/resources/airports/airports.ts">AirportGetRoutesResponse</a></code>

Methods:

- <code title="get /airports/{id}">client.airports.<a href="./src/resources/airports/airports.ts">retrieve</a>(id) -> AirportRetrieveResponse</code>
- <code title="get /airports">client.airports.<a href="./src/resources/airports/airports.ts">list</a>({ ...params }) -> AirportListResponse</code>
- <code title="get /airports/{id}/canonical">client.airports.<a href="./src/resources/airports/airports.ts">getCanonicalCode</a>(id, { ...params }) -> AirportGetCanonicalCodeResponse</code>
- <code title="get /airports/{id}/routes/{dest_id}">client.airports.<a href="./src/resources/airports/airports.ts">getRoutes</a>(destID, { ...params }) -> AirportGetRoutesResponse</code>

## Nearby

Types:

- <code><a href="./src/resources/airports/nearby.ts">NearbyListResponse</a></code>
- <code><a href="./src/resources/airports/nearby.ts">NearbyListFromAirportResponse</a></code>

Methods:

- <code title="get /airports/nearby">client.airports.nearby.<a href="./src/resources/airports/nearby.ts">list</a>({ ...params }) -> NearbyListResponse</code>
- <code title="get /airports/{id}/nearby">client.airports.nearby.<a href="./src/resources/airports/nearby.ts">listFromAirport</a>(id, { ...params }) -> NearbyListFromAirportResponse</code>

## Delays

Types:

- <code><a href="./src/resources/airports/delays.ts">DelayRetrieveResponse</a></code>
- <code><a href="./src/resources/airports/delays.ts">DelayListResponse</a></code>

Methods:

- <code title="get /airports/{id}/delays">client.airports.delays.<a href="./src/resources/airports/delays.ts">retrieve</a>(id) -> DelayRetrieveResponse</code>
- <code title="get /airports/delays">client.airports.delays.<a href="./src/resources/airports/delays.ts">list</a>({ ...params }) -> DelayListResponse</code>

## Flights

Types:

- <code><a href="./src/resources/airports/flights.ts">FlightListResponse</a></code>
- <code><a href="./src/resources/airports/flights.ts">FlightGetCountsResponse</a></code>
- <code><a href="./src/resources/airports/flights.ts">FlightListArrivalsResponse</a></code>
- <code><a href="./src/resources/airports/flights.ts">FlightListDeparturesResponse</a></code>
- <code><a href="./src/resources/airports/flights.ts">FlightListScheduledArrivalsResponse</a></code>
- <code><a href="./src/resources/airports/flights.ts">FlightListScheduledDeparturesResponse</a></code>
- <code><a href="./src/resources/airports/flights.ts">FlightListToDestinationResponse</a></code>

Methods:

- <code title="get /airports/{id}/flights">client.airports.flights.<a href="./src/resources/airports/flights.ts">list</a>(id, { ...params }) -> FlightListResponse</code>
- <code title="get /airports/{id}/flights/counts">client.airports.flights.<a href="./src/resources/airports/flights.ts">getCounts</a>(id) -> FlightGetCountsResponse</code>
- <code title="get /airports/{id}/flights/arrivals">client.airports.flights.<a href="./src/resources/airports/flights.ts">listArrivals</a>(id, { ...params }) -> FlightListArrivalsResponse</code>
- <code title="get /airports/{id}/flights/departures">client.airports.flights.<a href="./src/resources/airports/flights.ts">listDepartures</a>(id, { ...params }) -> FlightListDeparturesResponse</code>
- <code title="get /airports/{id}/flights/scheduled_arrivals">client.airports.flights.<a href="./src/resources/airports/flights.ts">listScheduledArrivals</a>(id, { ...params }) -> FlightListScheduledArrivalsResponse</code>
- <code title="get /airports/{id}/flights/scheduled_departures">client.airports.flights.<a href="./src/resources/airports/flights.ts">listScheduledDepartures</a>(id, { ...params }) -> FlightListScheduledDeparturesResponse</code>
- <code title="get /airports/{id}/flights/to/{dest_id}">client.airports.flights.<a href="./src/resources/airports/flights.ts">listToDestination</a>(destID, { ...params }) -> FlightListToDestinationResponse</code>

## Weather

Types:

- <code><a href="./src/resources/airports/weather.ts">WeatherGetForecastResponse</a></code>
- <code><a href="./src/resources/airports/weather.ts">WeatherGetObservationsResponse</a></code>

Methods:

- <code title="get /airports/{id}/weather/forecast">client.airports.weather.<a href="./src/resources/airports/weather.ts">getForecast</a>(id, { ...params }) -> WeatherGetForecastResponse</code>
- <code title="get /airports/{id}/weather/observations">client.airports.weather.<a href="./src/resources/airports/weather.ts">getObservations</a>(id, { ...params }) -> WeatherGetObservationsResponse</code>

# Operators

Types:

- <code><a href="./src/resources/operators/operators.ts">OperatorRetrieveResponse</a></code>
- <code><a href="./src/resources/operators/operators.ts">OperatorListResponse</a></code>
- <code><a href="./src/resources/operators/operators.ts">OperatorGetCanonicalResponse</a></code>

Methods:

- <code title="get /operators/{id}">client.operators.<a href="./src/resources/operators/operators.ts">retrieve</a>(id) -> OperatorRetrieveResponse</code>
- <code title="get /operators">client.operators.<a href="./src/resources/operators/operators.ts">list</a>({ ...params }) -> OperatorListResponse</code>
- <code title="get /operators/{id}/canonical">client.operators.<a href="./src/resources/operators/operators.ts">getCanonical</a>(id, { ...params }) -> OperatorGetCanonicalResponse</code>

## Flights

Types:

- <code><a href="./src/resources/operators/flights.ts">FlightListResponse</a></code>
- <code><a href="./src/resources/operators/flights.ts">FlightGetCountsResponse</a></code>
- <code><a href="./src/resources/operators/flights.ts">FlightListArrivalsResponse</a></code>
- <code><a href="./src/resources/operators/flights.ts">FlightListEnrouteResponse</a></code>
- <code><a href="./src/resources/operators/flights.ts">FlightListScheduledResponse</a></code>

Methods:

- <code title="get /operators/{id}/flights">client.operators.flights.<a href="./src/resources/operators/flights.ts">list</a>(id, { ...params }) -> FlightListResponse</code>
- <code title="get /operators/{id}/flights/counts">client.operators.flights.<a href="./src/resources/operators/flights.ts">getCounts</a>(id) -> FlightGetCountsResponse</code>
- <code title="get /operators/{id}/flights/arrivals">client.operators.flights.<a href="./src/resources/operators/flights.ts">listArrivals</a>(id, { ...params }) -> FlightListArrivalsResponse</code>
- <code title="get /operators/{id}/flights/enroute">client.operators.flights.<a href="./src/resources/operators/flights.ts">listEnroute</a>(id, { ...params }) -> FlightListEnrouteResponse</code>
- <code title="get /operators/{id}/flights/scheduled">client.operators.flights.<a href="./src/resources/operators/flights.ts">listScheduled</a>(id, { ...params }) -> FlightListScheduledResponse</code>

# Alerts

Types:

- <code><a href="./src/resources/alerts/alerts.ts">AlertRetrieveResponse</a></code>
- <code><a href="./src/resources/alerts/alerts.ts">AlertListResponse</a></code>

Methods:

- <code title="post /alerts">client.alerts.<a href="./src/resources/alerts/alerts.ts">create</a>({ ...params }) -> void</code>
- <code title="get /alerts/{id}">client.alerts.<a href="./src/resources/alerts/alerts.ts">retrieve</a>(id) -> AlertRetrieveResponse</code>
- <code title="put /alerts/{id}">client.alerts.<a href="./src/resources/alerts/alerts.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /alerts">client.alerts.<a href="./src/resources/alerts/alerts.ts">list</a>({ ...params }) -> AlertListResponse</code>
- <code title="delete /alerts/{id}">client.alerts.<a href="./src/resources/alerts/alerts.ts">delete</a>(id) -> void</code>

## Endpoint

Types:

- <code><a href="./src/resources/alerts/endpoint.ts">EndpointRetrieveResponse</a></code>

Methods:

- <code title="get /alerts/endpoint">client.alerts.endpoint.<a href="./src/resources/alerts/endpoint.ts">retrieve</a>() -> EndpointRetrieveResponse</code>
- <code title="put /alerts/endpoint">client.alerts.endpoint.<a href="./src/resources/alerts/endpoint.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /alerts/endpoint">client.alerts.endpoint.<a href="./src/resources/alerts/endpoint.ts">delete</a>() -> void</code>

# History

## Flights

Types:

- <code><a href="./src/resources/history/flights.ts">FlightRetrieveResponse</a></code>
- <code><a href="./src/resources/history/flights.ts">FlightMapResponse</a></code>
- <code><a href="./src/resources/history/flights.ts">FlightRouteResponse</a></code>
- <code><a href="./src/resources/history/flights.ts">FlightTrackResponse</a></code>

Methods:

- <code title="get /history/flights/{ident}">client.history.flights.<a href="./src/resources/history/flights.ts">retrieve</a>(ident, { ...params }) -> FlightRetrieveResponse</code>
- <code title="get /history/flights/{id}/map">client.history.flights.<a href="./src/resources/history/flights.ts">map</a>(id, { ...params }) -> FlightMapResponse</code>
- <code title="get /history/flights/{id}/route">client.history.flights.<a href="./src/resources/history/flights.ts">route</a>(id) -> FlightRouteResponse</code>
- <code title="get /history/flights/{id}/track">client.history.flights.<a href="./src/resources/history/flights.ts">track</a>(id, { ...params }) -> FlightTrackResponse</code>

## Airports

### Flights

Types:

- <code><a href="./src/resources/history/airports/flights.ts">FlightArrivalsResponse</a></code>
- <code><a href="./src/resources/history/airports/flights.ts">FlightDeparturesResponse</a></code>

Methods:

- <code title="get /history/airports/{id}/flights/arrivals">client.history.airports.flights.<a href="./src/resources/history/airports/flights.ts">arrivals</a>(id, { ...params }) -> FlightArrivalsResponse</code>
- <code title="get /history/airports/{id}/flights/departures">client.history.airports.flights.<a href="./src/resources/history/airports/flights.ts">departures</a>(id, { ...params }) -> FlightDeparturesResponse</code>

## Aircraft

Types:

- <code><a href="./src/resources/history/aircraft.ts">AircraftLastFlightResponse</a></code>

Methods:

- <code title="get /history/aircraft/{registration}/last_flight">client.history.aircraft.<a href="./src/resources/history/aircraft.ts">lastFlight</a>(registration) -> AircraftLastFlightResponse</code>

# Aircraft

Types:

- <code><a href="./src/resources/aircraft.ts">AircraftCheckBlockedResponse</a></code>
- <code><a href="./src/resources/aircraft.ts">AircraftGetOwnerResponse</a></code>
- <code><a href="./src/resources/aircraft.ts">AircraftGetTypeInfoResponse</a></code>

Methods:

- <code title="get /aircraft/{ident}/blocked">client.aircraft.<a href="./src/resources/aircraft.ts">checkBlocked</a>(ident) -> AircraftCheckBlockedResponse</code>
- <code title="get /aircraft/{ident}/owner">client.aircraft.<a href="./src/resources/aircraft.ts">getOwner</a>(ident) -> AircraftGetOwnerResponse</code>
- <code title="get /aircraft/types/{type}">client.aircraft.<a href="./src/resources/aircraft.ts">getTypeInfo</a>(type) -> AircraftGetTypeInfoResponse</code>

# Schedules

Types:

- <code><a href="./src/resources/schedules.ts">ScheduleRetrieveResponse</a></code>

Methods:

- <code title="get /schedules/{date_start}/{date_end}">client.schedules.<a href="./src/resources/schedules.ts">retrieve</a>(dateEnd, { ...params }) -> ScheduleRetrieveResponse</code>

# DisruptionCounts

Types:

- <code><a href="./src/resources/disruption-counts.ts">DisruptionCountRetrieveEntityResponse</a></code>
- <code><a href="./src/resources/disruption-counts.ts">DisruptionCountRetrieveGlobalResponse</a></code>

Methods:

- <code title="get /disruption_counts/{entity_type}/{id}">client.disruptionCounts.<a href="./src/resources/disruption-counts.ts">retrieveEntity</a>(id, { ...params }) -> DisruptionCountRetrieveEntityResponse</code>
- <code title="get /disruption_counts/{entity_type}">client.disruptionCounts.<a href="./src/resources/disruption-counts.ts">retrieveGlobal</a>(entityType, { ...params }) -> DisruptionCountRetrieveGlobalResponse</code>

# Account

Types:

- <code><a href="./src/resources/account.ts">AccountGetUsageResponse</a></code>

Methods:

- <code title="get /account/usage">client.account.<a href="./src/resources/account.ts">getUsage</a>({ ...params }) -> AccountGetUsageResponse</code>
