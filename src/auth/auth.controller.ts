import { Controller, Version,Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Get()
    @Version('1')
    getLog(){
        this.authService.log()
    }
}
