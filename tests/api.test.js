import supertest from 'supertest';
import server from '../server/app';

const sRequest = supertest(server);

const apiRoutePath = '/api';
const unixTestTimestamp = 1451001600000;
const dateTestString = '2015-12-25';
const utcTestDateString = 'Fri, 25 Dec 2015 00:00:00 GMT';

describe('/api endpoint', () => {
  test('does route exist?', async () => {
    const res = await sRequest.get(apiRoutePath);
    expect(res.status).toEqual(200);
  });
  test('check if route converts ms to unix timestamp', async () => {
    const res = await sRequest.get(`${apiRoutePath}/${unixTestTimestamp}`);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('unix');
    expect(res.body).toHaveProperty('utc');
    expect(res.body.unix).toBe(unixTestTimestamp);
    expect(res.body.utc).toBe(utcTestDateString);
  });
  test('check if route converts date string to utc', async () => {
    const res = await sRequest.get(`${apiRoutePath}/${dateTestString}`);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('unix');
    expect(res.body).toHaveProperty('utc');
    expect(res.body.unix).toBe(unixTestTimestamp);
    expect(res.body.utc).toBe(utcTestDateString);
  });
});
