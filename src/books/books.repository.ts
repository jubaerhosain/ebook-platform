import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createBookDto: CreateBookDto): Promise<BookDto> {
        const book = await this.prismaService.book.create({
            data: createBookDto,
        });
        return book;
    }
}
