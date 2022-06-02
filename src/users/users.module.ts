import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UsersRepository } from './users.repository';
import { UsersController } from './users.controller';
// import { UsersController } from './users.controller';

@Module({
  imports : [ MongooseModule.forFeature([{
    name: User.name,
    schema: UserSchema,
    collection: 'users'
  }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository]
})
export class UsersModule {}
