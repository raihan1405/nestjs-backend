import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Mengaktifkan CORS dengan opsi
  app.enableCors({
    origin: 'https://next-js-frontend-kappa.vercel.app', // Hanya mengizinkan permintaan dari origin ini
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });


  await app.listen(3000);
}
bootstrap();
