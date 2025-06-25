import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionInterceptor } from './common/interceptors/http-exception.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              
      forbidNonWhitelisted: true,  
      transform: true,             
    }),
  );

  app.useGlobalInterceptors(new HttpExceptionInterceptor());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
