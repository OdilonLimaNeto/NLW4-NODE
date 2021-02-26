import { Router } from 'express';
import { UserController } from './controllers/UserController';
import {  SurveyController } from './controllers/SurveyController';
const router = Router(); // instanciando Router();

//Instancia de controller/UserController.ts
const userController = new UserController();
const surveysController = new SurveyController();

router.post('/users', userController.create);
router.post('/surveys', surveysController.create);

export { router };