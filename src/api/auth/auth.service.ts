import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    signup(signupDto: SignupDto) {
        return 'This action signup';
    }

    async login(loginDto: LoginDto) {
        return `This action login`;
        // const user = await this.usersService.findOne(1);
        // if (user?.password !== pass) {
        //     throw new UnauthorizedException();
        // }
        // const payload = { sub: user.userId, username: user.username };
        // return {
        //     access_token: await this.jwtService.signAsync(payload),
        // };
    }

    logout(id: number) {
        return `This action logs out`;
    }
}
