import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    author: string;
    
    @IsNotEmpty()
    @IsNumber()
    price: number;
}
