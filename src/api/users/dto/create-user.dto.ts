import { IsNotEmpty, IsString, IsEmail, IsIn, IsEnum } from 'class-validator';

enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
}

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsEnum(Role)
    role: Role;
}
