import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksRepository {
    constructor(private readonly prismaService: PrismaService) {
        console.log("Repository works");
    }
}
