import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Mengaktifkan CORS dengan beberapa origin
  app.enableCors({
    origin: ['http://localhost:3000', 'https://next-js-frontend-kappa.vercel.app/'], // Daftar origin yang diizinkan
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
