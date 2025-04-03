import { User } from '../entities/User';
import { UserRepository } from './UserRepository';

export class UserRepositoryInMemory implements UserRepository {
    public users: User[] = [];

    async create(user: User) {
        this.users.push(user);
    }
}
