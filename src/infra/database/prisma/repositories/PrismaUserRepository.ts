import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entities/User';
import { UserRepository } from 'src/modules/users/repositories/UserRepository';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '../mappers/PrismaUserMapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private prisma: PrismaService) {}

    async create(user: User) {
        const userRaw = PrismaUserMapper.toPrisma(user);
        await this.prisma.user.create({ data: userRaw });
    }
}
