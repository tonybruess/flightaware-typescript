// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flightaware from 'flightaware';

const client = new Flightaware({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource flights', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.flights.retrieve('ident');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.flights.retrieve(
        'ident',
        { cursor: 'cursor', end: {}, ident_type: 'designator', max_pages: 1, start: {} },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flightaware.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getCanonicalIdent', async () => {
    const responsePromise = client.flights.getCanonicalIdent('ident');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getCanonicalIdent: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.flights.getCanonicalIdent(
        'ident',
        { country_code: 'US', ident_type: 'designator' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flightaware.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getCurrentPosition', async () => {
    const responsePromise = client.flights.getCurrentPosition('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getFiledRoute', async () => {
    const responsePromise = client.flights.getFiledRoute('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getTrack', async () => {
    const responsePromise = client.flights.getTrack('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getTrack: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.flights.getTrack(
        'id',
        { include_estimated_positions: true, include_surface_positions: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flightaware.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getTrackMap', async () => {
    const responsePromise = client.flights.getTrackMap('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getTrackMap: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.flights.getTrackMap(
        'id',
        {
          airports_expand_view: true,
          bounding_box: [0, 0, 0, 0],
          height: 1,
          layer_off: ['US Cities'],
          layer_on: ['US Cities'],
          show_airports: true,
          show_data_block: true,
          width: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flightaware.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('submitIntent: only required params', async () => {
    const responsePromise = client.flights.submitIntent('ident', {
      aircraft_type: 'C162',
      destination: '50R',
      intended_off: '2021-10-16T21:30:00Z',
      intended_on: '2021-10-16T22:50:00Z',
      origin: 'KSGR',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('submitIntent: required and optional params', async () => {
    const response = await client.flights.submitIntent('ident', {
      aircraft_type: 'C162',
      destination: '50R',
      intended_off: '2021-10-16T21:30:00Z',
      intended_on: '2021-10-16T22:50:00Z',
      origin: 'KSGR',
      airspeed: 86,
      altitude: 3500,
      route: 'MAPGP VICUC',
    });
  });
});
