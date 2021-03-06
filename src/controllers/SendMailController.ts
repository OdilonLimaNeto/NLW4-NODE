import { getCustomRepository } from 'typeorm';
import { Request, Response } from "express";
import { UsersRepository } from '../repositories/UsersRepository';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { SurveysRepository } from '../repositories/SurveysRepository';
import SendMailService from '../services/SendMailService';

class SendMailController {
    async execute(request: Request, response: Response){

        const { email, survey_id} = request.body;

        const usersRepository = getCustomRepository(UsersRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const userAlReadyExists = await usersRepository.findOne({
            email
        });

        if(!userAlReadyExists) {
            return response.status(400).json({
                error: 'User does not exists'
            });
        }

        const survey = await surveysRepository.findOne({ id: survey_id });

        if(!survey) {
            return response.status(400).json({
                error: 'survey does note exists'
            });
        }

        const surveyUser = surveysUsersRepository.create({
            user_id: userAlReadyExists.id,
            survey_id
        });

        await surveysUsersRepository.save(surveyUser);

        await SendMailService.execute(email, survey.title, survey.description);


        return response.json(surveyUser)

    }
}

export { SendMailController };