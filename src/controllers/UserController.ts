import { Request, Response } from 'express';
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
}

export { UserController };
