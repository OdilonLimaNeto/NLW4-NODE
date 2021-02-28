import { Request, Response, request } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';

class SurveyController {
    async create(request: Request, response: Response) {
        const { title, description } = request.body;
        
        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({
            title,
            description
        });

        await surveysRepository.save(survey)
        return response.status(201).json(survey)
    }

    async show(request: Request, response: Response) {
        const surveysRepository = getCustomRepository(SurveysRepository);

        const lista = await surveysRepository.find();

        return response.json(lista);

    }

}

export { SurveyController };
