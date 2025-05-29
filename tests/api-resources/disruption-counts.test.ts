// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flightaware from 'flightaware';

const client = new Flightaware({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource disruptionCounts', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveEntity: only required params', async () => {
    const responsePromise = client.disruptionCounts.retrieveEntity('id', { entity_type: 'origin' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveEntity: required and optional params', async () => {
    const response = await client.disruptionCounts.retrieveEntity('id', {
      entity_type: 'origin',
      time_period: 'yesterday',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGlobal', async () => {
    const responsePromise = client.disruptionCounts.retrieveGlobal('origin');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGlobal: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.disruptionCounts.retrieveGlobal(
        'origin',
        { cursor: 'cursor', max_pages: 1, time_period: 'yesterday' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flightaware.NotFoundError);
  });
});
