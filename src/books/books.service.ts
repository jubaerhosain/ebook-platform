import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksRepository } from './books.repository';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
    constructor(private readonly booksRepository: BooksRepository ) {}

    async create(createBookDto: CreateBookDto): Promise<BookDto> {
        return await this.booksRepository.create(createBookDto);
    }

    findAll() {
        return `This action returns all books`;
    }

    findOne(id: number) {
        return `This action returns a #${id} book`;
    }

    update(id: number, updateBookDto: UpdateBookDto) {
        return `This action updates a #${id} book`;
    }

    remove(id: number) {
        return `This action removes a #${id} book`;
    }
}
