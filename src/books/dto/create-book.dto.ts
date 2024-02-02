import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    author: string;

    @IsNotEmpty()
    genre: string;

    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    price: number;
}
