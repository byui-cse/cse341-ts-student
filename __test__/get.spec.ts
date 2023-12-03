// Import necessary modules using TypeScript import syntax
import supertest from 'supertest';
import { expect } from '@jest/globals';
import app from '../app'; // Ensure your app module has a default export

// Define the request with the imported supertest and app
const request = supertest(app);

describe('Test Handlers', () => {
    test('responds to GET /', async () => {
        const res = await request.get('/');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
    });

    test('responds to GET /users', async () => {
        const res = await request.get('/users');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
    });

});
