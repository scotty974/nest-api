import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
constructor(private readonly prismaService:PrismaService){}

    signup(){
        return '<p>Sign Up</p>'
    }

    signin(){
        return '<p>Sign In</p>'
    }
}
