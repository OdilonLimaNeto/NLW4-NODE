import request from 'supertest';
import { app } from '../app';

describe('Users', () => {
    request(app).post('/users')
    .send({
        email: 'odilonlima@gmail.com',
        name: 'Odilon Lima'
    });
});