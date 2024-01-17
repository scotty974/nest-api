import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
   
    signup(){
        return '<p>Sign Up</p>'
    }
    
    signin(){
        return '<p>Sign In</p>'
    }
}
