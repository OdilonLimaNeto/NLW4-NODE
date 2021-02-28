import { Request, Response, request } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;
        const userRepository = getCustomRepository(UsersRepository);

        // SELECT * FROM USERS WHERE EMAIL = "EMAIL"
        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            return response.status(400).json({
                error: "Usuario ja existe"
            })
        }
        const user = userRepository.create({
            name, email
        });

        await userRepository.save(user);
        return response.json(user);
    }

    async show(request: Request, response: Response) {
        const userRepository = getCustomRepository(UsersRepository);

        const lista = await userRepository.find();

        return response.json(lista);
    };
}

export { UserController };
