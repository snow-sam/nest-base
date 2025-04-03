import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/UserRepository';
import { hash } from 'bcrypt';
import { User } from '../../entities/User';

type CreateUserUseCaseParam = {
    name: string;
    email: string;
    password: string;
};

@Injectable()
export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute({ name, email, password }: CreateUserUseCaseParam) {
        const user = new User({
            name,
            email,
            password: await hash(password, 10),
        });

        this.userRepository.create(user);

        return user;
    }
}
