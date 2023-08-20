import { before } from 'node:test';
import request from 'supertest';
import { app } from '../app'; // Import your Express app instance

let server: any;

const testPort = 7002;

beforeAll((done) => {
  server = app.listen(testPort, done);
}, 10000);

afterAll(async () => {
  await new Promise<void>((resolve) => {
    server.close(resolve);
  });
});


describe('POST /fun/info', () => {
  it('should insert fun info into the database', async () => {
    const response = await request(app)
      .post('/fun/info')
      .send({
        name: 'Test Name',
        hobbies: ['Hobby 1', 'Hobby 2'],
        favoriteFood: 'Test Food',
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fun information inserted successfully');
  });
});