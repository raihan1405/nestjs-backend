//import all modul in this project

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './products/categories.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
      ConfigModule.forRoot({
        envFilePath :'.env',
        isGlobal:true,
      }),
      MongooseModule.forRoot(process.env.DB_URI),
      ProductsModule,
      CategoriesModule,
    ],
    controllers : [AppController] ,
    providers : [AppService],
})

export class AppModule {}


