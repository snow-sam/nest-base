import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/modules/users/useCases/createUserUseCase/createUserUseCase';
import { UsersController } from './users.controller';

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [CreateUserUseCase],
})
export class UsersModule {}
