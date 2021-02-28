import 'reflect-metadata';
import express from 'express';
import createConnection from './database';
import { router } from './routes';

createConnection();
const app = express();
app.use(express.json()); //recebendo via JSON
app.use(router); // usando src/routes.ts

export { app };