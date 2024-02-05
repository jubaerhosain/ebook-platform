import { ConflictException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly jwtService: JwtService,
    ) {}

    signup(signupDto: SignupDto) {
        const user = this.usersRepository.findOneByEmail("EMAIL");
        if (user) {
            throw new ConflictException({ message: 'user already exists with email email@gmail.com' });
        }

        // hash password with bcrypt

        // this.usersRepository.create(signupDto);
    }

    async login(loginDto: LoginDto) {
        // const user = await this.usersService.findOne(1);
        // if (user?.password !== pass) {
        //     throw new UnauthorizedException();
        // }
        const payload = { sub: 1, username: 'jubaer' };
        return {
            message: 'logged in successfully',
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    logout() {
        return `This action logs out`;
    }
}
