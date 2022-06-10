import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { HttpExceptionFilter } from '../candidatos/http-exception.filter';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from '../auth/strategy/local/local-auth.guard';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createUser: CreateUserDto) {
    if (createUser.username && createUser.password) return await this.usersService.create(createUser);
    throw new HttpException('Invalid Id', HttpStatus.BAD_REQUEST);
  }

  @Get(':username')
  @UseFilters(new HttpExceptionFilter())
  async findOne(@Param('username') username: string) {
    if (username) return await this.usersService.findOne(username);
    throw new HttpException('Invalid Id', HttpStatus.BAD_REQUEST);
  }

  // @UseGuards(LocalAuthGuard)
  // @Post('test')
  // test(@Request() req): any {
  //   return req.isAuthenticated()
  // }
}
