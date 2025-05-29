// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flightaware from 'flightaware';

const client = new Flightaware({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource nearby', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.airports.nearby.list({ latitude: 0, longitude: 0, radius: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.airports.nearby.list({
      latitude: 0,
      longitude: 0,
      radius: 0,
      cursor: 'cursor',
      max_pages: 1,
      only_iap: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listFromAirport: only required params', async () => {
    const responsePromise = client.airports.nearby.listFromAirport('id', { radius: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listFromAirport: required and optional params', async () => {
    const response = await client.airports.nearby.listFromAirport('id', {
      radius: 0,
      cursor: 'cursor',
      max_pages: 1,
      only_iap: true,
    });
  });
});
