import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'src/modules/users/repositories/UserRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';

@Module({
    providers: [
        PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository,
        },
    ],
    exports: [UserRepository],
})
export class DataBaseModule {}
