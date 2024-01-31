import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { BookDto } from './dto/book.dto';
import { BookQueryDto } from './dto/book-query.dto';

@Injectable()
export class BooksRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createBookDto: CreateBookDto): Promise<BookDto> {
        const book = await this.prismaService.book.create({
            data: createBookDto,
        });
        return book;
    }

    async findOne(id: number): Promise<BookDto> {
        const book = await this.prismaService.book.findUnique({
            where: { id: id },
        });
        return book;
    }

    async findAll(query: BookQueryDto): Promise<BookDto[]> {
        const { author, sort, order, limit } = query;

        const booksQuery = {
            where: {
                author: {
                    contains: author,
                },
            },
            orderBy:
                sort && order
                    ? {
                          [sort]: order,
                      }
                    : {},
            take: limit,
        };

        const books = await this.prismaService.book.findMany(booksQuery);
        return books;
    }
}
