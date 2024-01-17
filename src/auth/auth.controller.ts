import { Controller, Version, Get, Post,Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @Version('1')
  signup(@Req() req:Request) {
    console.log(req.headers)
    return this.authService.signup();
  }

  @Post('signin')
  @Version('1')
  signin() {
    return this.authService.signin();
  }
}
