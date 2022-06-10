import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('local/signin')
  signInLocal(@Body() authDto: AuthDto){
    return this.authService.signInLocal(authDto);
  }

  @Post('local/signup')
  signUpLocal(@Body() authDto: AuthDto){
    return this.authService.signUpLocal(authDto);
  }
}
