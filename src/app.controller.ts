import {
  Controller,
  Get,
  UseGuards,
  Request, Post,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/strategy/local/local-auth.guard';
import { GetCurrentUserById } from './utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    // console.log('oooo', req.isAuthenticated());
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('authenticate')
  authenticated(@GetCurrentUserById() userId: number): any { // substitui o @Request() req -> req.user
    return { message: 'ok' }; // tem que passar para o serv
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getHello(@GetCurrentUserById() userId: number): any { // substitui o @Request() req -> req.user
    return this.appService.getHello(userId); // tem que passar para o serv
  }
}
