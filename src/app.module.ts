import { Module } from '@nestjs/common';
import { DataBaseModule } from './infra/database/database.module';
import { UsersModule } from './infra/http/users/users.module';

@Module({
    imports: [DataBaseModule, UsersModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
