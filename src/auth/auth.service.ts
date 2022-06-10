import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
              private jwtService: JwtService) {
  }

  // func magicamente chamada pelo nest
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findUniqueUser(username);

    const isMatch = await bcrypt.compare(password, user.password);

      if (user && isMatch) {
        return { username: user.username }; // usado para o login
      }
    return null;
  }

  // async registerUser(userDto: CreateUserDto) {
  //   const userExists = await this.usersService.findUniqueUser(userDto.username);
  //
  //   if (!userExists) {
  //     const hash = await bcrypt.hash(userDto.password, 8);
  //     if (hash) {
  //       const user = await this.usersService.create({
  //         username: userDto.username,
  //         password: hash
  //       });
  //       return { username: user.username }
  //     }
  //   }
  //   throw new HttpException('user already exists', 400);
  // }

  async signInLocal(authDto: AuthDto) {
    const user = await this.usersService.findUniqueUser(authDto.username);
    if (!user) throw new UnauthorizedException('invalid credentials');

    const isMatch = await bcrypt.compare(authDto.password, user.password);
    if (!isMatch) throw new UnauthorizedException('invalid credentials');

    if (user && isMatch) {
      return await this.signUser(user.id, user.username, user.type);
      // return user
    }
  }

  signUpLocal(authDto: AuthDto) {
  //   if (!authDto.password) throw new UnauthorizedException('invalid credentials');
  //   return {message: 'ok'}
  }

  async signUser(id: string, username: string, type: string) {
    return {
      access_token: this.jwtService.sign({
        sub: id,
        username,
        claim: type
      }),
      type,
      id
    };
  }
}
