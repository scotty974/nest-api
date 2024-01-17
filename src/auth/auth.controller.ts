import { Controller, Version, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @Version('1')
  signup() {
    return this.authService.signup();
  }

  @Post('signin')
  @Version('1')
  signin() {
    return this.authService.signin();
  }
}
