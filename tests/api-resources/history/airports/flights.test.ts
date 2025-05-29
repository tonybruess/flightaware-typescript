// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flightaware from 'flightaware';

const client = new Flightaware({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource flights', () => {
  // skipped: tests are disabled for the time being
  test.skip('arrivals: only required params', async () => {
    const responsePromise = client.history.airports.flights.arrivals('id', { end: {}, start: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('arrivals: required and optional params', async () => {
    const response = await client.history.airports.flights.arrivals('id', {
      end: {},
      start: {},
      airline: 'UAL',
      cursor: 'cursor',
      max_pages: 1,
      type: 'General_Aviation',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('departures: only required params', async () => {
    const responsePromise = client.history.airports.flights.departures('id', { end: {}, start: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('departures: required and optional params', async () => {
    const response = await client.history.airports.flights.departures('id', {
      end: {},
      start: {},
      airline: 'UAL',
      cursor: 'cursor',
      max_pages: 1,
      type: 'General_Aviation',
    });
  });
});
