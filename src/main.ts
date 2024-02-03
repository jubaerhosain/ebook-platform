import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ValidationExceptionFactory } from './exceptions/validation.exception';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            exceptionFactory: ValidationExceptionFactory,
        }),
    );
    await app.listen(process.env.PORT);
    console.log(`App is listening on port ${process.env.PORT} ...`);
}
bootstrap();
