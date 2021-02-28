import { Router } from 'express';
import { UserController } from './controllers/UserController';
import {  SurveyController } from './controllers/SurveyController';
const router = Router(); // instanciando Router();

//Instancia de controller/UserController.ts
const userController = new UserController();

//Instancia de controller/surveycontroller.ts
const surveysController = new SurveyController();

router.post('/users', userController.create);
router.get('/users', userController.show);

router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);

export { router };