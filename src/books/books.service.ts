import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksRepository } from './books.repository';
import { BookDto } from './dto/book.dto';
import { BookQueryDto } from './dto/book-query.dto';

@Injectable()
export class BooksService {
    constructor(private readonly booksRepository: BooksRepository) {}

    async create(createBookDto: CreateBookDto): Promise<BookDto> {
        return await this.booksRepository.create(createBookDto);
    }

    findAll(query: BookQueryDto): Promise<BookDto[]> {
        return this.booksRepository.findAll(query);
    }

    async findOne(id: number): Promise<BookDto> {
        const book = await this.booksRepository.findOne(id);

        if (!book) {
            throw new HttpException(`book with id: ${id} was not found`, HttpStatus.NOT_FOUND);
        }

        return book;
    }

    async update(id: number, updateBookDto: UpdateBookDto): Promise<BookDto> {
        const isExists = await this.booksRepository.isExistById(id);

        if (!isExists) {
            throw new HttpException(`book with id: ${id} was not found`, HttpStatus.NOT_FOUND);
        }

        const updatedBook = await this.booksRepository.update(id, updateBookDto);
        return updatedBook;
    }

    remove(id: number) {
        return `This action removes a #${id} book`;
    }
}
