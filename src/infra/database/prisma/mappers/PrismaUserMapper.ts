import { User } from 'src/modules/users/entities/User';
import { User as UserRaw } from '@prisma/client';

export class PrismaUserMapper {
    static toPrisma({ id, name, email, password, createdAt }: User): UserRaw {
        return { id, name, email, password, createdAt };
    }
}
