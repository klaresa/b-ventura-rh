import { HttpException, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

export type User = any;

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(userDto: CreateUserDto) {
    const userExists = await this.findUniqueUser(userDto.username);

    if (!userExists) {
      const hash = await bcrypt.hash(userDto.password, 8);
      if (hash) {
        const user = await this.usersRepository.create({
          username: userDto.username,
          password: hash
        });
        return { username: user.username }
      }
    }
    throw new HttpException('user exists', 400);
  }

  async findUniqueUser(username: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ username: username } );
    if (user) {
      return user
    }
    throw new HttpException('invalid user/password', 404);
  }

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ username: username } );
    if (user) {
      return { username: username }
    }
    throw new HttpException('not found', 404);

  }
}
