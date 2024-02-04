import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
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

    const configService = app.get(ConfigService);
    const port = configService.get('port');

    await app.listen(port);
    console.log(`App is listening on port ${port} ...`);
}
bootstrap();
