// src/app/backend/src/__tests__/app.test.js
const request = require('supertest');
const app = require('../app'); // Import your app
const insults = require('../insults');

// Mocking the getRandomInsult method
jest.mock('../insults');

describe('GET /api/insult/:id', () => {
    beforeEach(() => {
        insults.getRandomInsult.mockClear(); // Clear mocks before each test
    });

    it('should return a random insult for a valid ID', async () => {
        const mockInsult = 'You are like a cloud. When you disappear, it’s a beautiful day.';
        insults.getRandomInsult.mockReturnValue(mockInsult);

        const response = await request(app).get('/api/insult/1');

        expect(response.status).toBe(200);
        expect(response.body.insult).toBe(mockInsult);
        expect(insults.getRandomInsult).toHaveBeenCalledWith('1');
    });

    it('should return an error message for an invalid ID', async () => {
        insults.getRandomInsult.mockReturnValue('No insults available for this ID.');

        const response = await request(app).get('/api/insult/99'); // Assuming 99 is invalid

        expect(response.status).toBe(200);
        expect(response.body.insult).toBe('No insults available for this ID.');
        expect(insults.getRandomInsult).toHaveBeenCalledWith('99');
    });
});
