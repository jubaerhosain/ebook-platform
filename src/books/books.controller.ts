import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    async create(@Body() createBookDto: CreateBookDto): Promise<BookDto> {
        return await this.booksService.create(createBookDto);
    }

    @Get()
    findAll(): Promise<BookDto[]> {
        return this.booksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<BookDto> {
        return this.booksService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateBookDto: UpdateBookDto,
    ): Promise<BookDto> {
        return this.booksService.update(+id, updateBookDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.booksService.remove(+id);
    }
}
