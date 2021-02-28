import 'reflect-metadata';
import express from 'express';
import './database';
import { router } from './routes';

const app = express();
app.use(express.json()); //recebendo via JSON
app.use(router); // usando src/routes.ts

export { app };