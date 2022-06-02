import { Body, Controller, Get, HttpException, HttpStatus, Post, Request, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { HttpExceptionFilter } from './candidatos/http-exception.filter';
import { CreateUserDto } from './users/dto/create-user.dto';
import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    // console.log('oooo', req.isAuthenticated());
    return { message: 'ok'};
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
