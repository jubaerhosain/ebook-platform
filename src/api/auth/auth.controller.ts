import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    signup(@Body() LoginDto: SignupDto) {}

    @Post()
    login() {}

    @Delete(':id')
    logout(@Param('id') id: string) {}
}
