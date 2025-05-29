// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flightaware from 'flightaware';

const client = new Flightaware({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // skipped: tests are disabled for the time being
  test.skip('advanced', async () => {
    const responsePromise = client.foresight.flights.search.advanced();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('advanced: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.foresight.flights.search.advanced(
        {
          cursor: 'cursor',
          max_pages: 1,
          query: '{orig_or_dest {KLAX KBUR KSNA KLGB}} {<= alt 8000} {match ident AAL*}\n',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flightaware.NotFoundError);
  });
});
