import { Controller, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    signup(@Body() signupDto: SignupDto) {}

    @Post()
    login(@Body() loginDto: LoginDto) {}

    @Delete(':id')
    logout(@Param('id', ParseIntPipe) id: number) {
        
    }
}
