import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksRepository } from './books.repository';
import { BookDto } from './dto/book.dto';
import { BookQueryDto } from './dto/book-query.dto';

@Injectable()
export class BooksService {
    constructor(private readonly booksRepository: BooksRepository ) {}

    async create(createBookDto: CreateBookDto): Promise<BookDto> {
        return await this.booksRepository.create(createBookDto);
    }

    findAll(query: BookQueryDto): Promise<BookDto[]> {
        return this.booksRepository.findAll(query);
    }

    findOne(id: number): Promise<BookDto> {
        return this.booksRepository.findOne(id);
    }

    update(id: number, updateBookDto: UpdateBookDto): Promise<BookDto> {
        return null;
    }

    remove(id: number) {
        return `This action removes a #${id} book`;
    }
}
