import supertest from 'supertest';
import server from '../server/app';

const sRequest = supertest(server);

const apiRoutePath = '/api';

describe('/api endpoint', () => {
  test('does route exist?', async () => {
    const res = await sRequest.get(apiRoutePath);
    expect(res.status).toEqual(200);
  });
  test('check if route converts ms to unix timestamp', async () => {
    const unixTestTimestamp = 1451001600000;
    const res = await sRequest.get(`${apiRoutePath}/${unixTestTimestamp}`);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('unix');
    expect(res.body.unix).toBe(unixTestTimestamp);
  });
});
