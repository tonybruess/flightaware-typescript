// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flightaware from 'flightaware';

const client = new Flightaware({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource flights', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.foresight.flights.retrieve('ident');
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
      client.foresight.flights.retrieve(
        'ident',
        { cursor: 'cursor', end: {}, ident_type: 'designator', max_pages: 1, start: {} },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flightaware.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePosition', async () => {
    const responsePromise = client.foresight.flights.retrievePosition('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
