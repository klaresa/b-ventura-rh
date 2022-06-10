import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { jwtConstants } from './auth/constants';
import { LocalStrategy } from './strategy/local/local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [UsersModule, PassportModule, // PassportModule.register({ session: true } p sessao
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s'},
    }),
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, LocalStrategy, SessionSerializer, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
