import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './api/auth/auth.module';
import { BooksModule } from './api/books/books.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        BooksModule,
        PrismaModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
