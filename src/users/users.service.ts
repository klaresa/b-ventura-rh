import { HttpException, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
// import { User } from './schemas/user.schema';

export type User = any;

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(userDto: CreateUserDto) : Promise<User> {
    const userExists = await this.findUniqueUser(userDto.username);

    if (!userExists) {
      const hash = await bcrypt.hash(userDto.password, 8);
      if (hash) {
        const user = await this.usersRepository.create({
          type: userDto.type,
          username: userDto.username,
          password: hash
        });

        user.password = undefined;
        return user;
      }
    }
    throw new HttpException('user exists', 400);
  }

  async findUniqueUser(username: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ username: username } );
    if (user) {
      return user
    }
    return null;
  }

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ username: username } );
    if (user) {
      return { password: '', type: user.type, username: username }
      // return user
    }
    return null;

  }
}
