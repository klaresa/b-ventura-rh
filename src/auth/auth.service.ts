import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findUniqueUser(username);

    const isMatch = await bcrypt.compare(password, user.password);

      if (user && isMatch) {
        return { username: user.username }; // usado para o login
      }
    return null;
  }

  async registerUser(userDto: CreateUserDto) {
    const userExists = await this.usersService.findUniqueUser(userDto.username);

    if (!userExists) {
      const hash = await bcrypt.hash(userDto.password, 8);
      if (hash) {
        const user = await this.usersService.create({
          username: userDto.username,
          password: hash
        });
        return { username: user.username }
      }
    }
    throw new HttpException('user already exists', 400);
  }
}
