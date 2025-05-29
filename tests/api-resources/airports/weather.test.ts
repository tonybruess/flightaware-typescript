// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flightaware from 'flightaware';

const client = new Flightaware({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource weather', () => {
  // skipped: tests are disabled for the time being
  test.skip('getForecast', async () => {
    const responsePromise = client.airports.weather.getForecast('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getForecast: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.airports.weather.getForecast(
        'id',
        { return_nearby_weather: true, timestamp: '2021-12-31T19:59:59Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flightaware.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getObservations', async () => {
    const responsePromise = client.airports.weather.getObservations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getObservations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.airports.weather.getObservations(
        'id',
        {
          cursor: 'cursor',
          max_pages: 1,
          return_nearby_weather: true,
          temperature_units: 'C',
          timestamp: '2021-12-31T19:59:59Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flightaware.NotFoundError);
  });
});
