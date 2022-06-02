import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './candidatos/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.useGlobalFilters(new HttpExceptionFilter());

  app.use(session({
    secret: process.env.SESS,
    resave: false,
    saveUnitialized: false,
    cookie: { maxAge: 3600000 }
  }));

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
