import server from '../server/app';
import supertest from 'supertest';

const sRequest = supertest(server);

const apiDateRoutePath = '/api/date';

describe('/api/date endpoints', () => {
  test('does the route exist?', async () => {
    const res = await sRequest.get(apiDateRoutePath);
    expect(res.status).toEqual(200);
  })
})