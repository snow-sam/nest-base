import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/modules/users/useCases/createUserUseCase/createUserUseCase';
import { UsersController } from './users.controller';
import { DataBaseModule } from 'src/infra/database/database.module';

@Module({
    imports: [DataBaseModule],
    controllers: [UsersController],
    providers: [CreateUserUseCase],
})
export class UsersModule {}
