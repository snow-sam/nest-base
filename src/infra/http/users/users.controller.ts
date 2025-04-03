import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/modules/users/useCases/createUserUseCase/createUserUseCase';
import { CreateUserDto } from './dtos/createUserDto';
import { UserViewModel } from './viewModels/UserViewModel';

@Controller('users')
export class UsersController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    @Post()
    async create(@Body() body: CreateUserDto) {
        const user = await this.createUserUseCase.execute(body);
        return UserViewModel.toHTTP(user);
    }
}
