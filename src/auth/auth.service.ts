import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    log(){
        console.log('Un truc')
    }
}
