import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Mengaktifkan CORS dengan opsi
  app.enableCors({
    origin: 'http://localhost:3000', // Hanya mengizinkan permintaan dari origin ini
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
