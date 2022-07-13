import { Module } from '@nestjs/common';
import { DBUserModule } from '../dataBaseUser/dbUsers.module';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [DBUserModule ],
  controllers:[UserController],
  providers: [
    ...userProviders,
    UserService,
  ],
  exports:[UserService]
})
export class UserModule {}