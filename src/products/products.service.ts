//yang berinteraksi dengan database

import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async getAllProducts(): Promise<Product[]> {
    try {
      const products = await this.productModel.find().exec();
      this.logger.log(`Retrieved all products, count: ${products.length}`);
      return products;
    } catch (error) {
      this.logger.error('Failed to retrieve products', error.stack);
      throw new Error('Failed to retrieve products');
    }
  }

  async searchProducts(keyword: string): Promise<Product[]> {
    const regex = new RegExp(keyword, 'i'); // 'i' untuk case-insensitive
    return this.productModel.find({ name: regex }).exec();
  }
}
