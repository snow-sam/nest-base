import { UserRepositoryInMemory } from '../repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from './createUserUseCase/createUserUseCase';

let createUserUseCase: CreateUserUseCase;
let userRepository: UserRepositoryInMemory;

describe('Create User', () => {
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepository);
    });

    it('Should be able to create a user', async () => {
        expect(userRepository.users).toEqual([]);

        const user = await createUserUseCase.execute({
            name: 'Samuel',
            email: 'sam@sam.com',
            password: '123456',
        });

        expect(userRepository.users).toEqual([user]);
    });
});
