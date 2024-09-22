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

  async searchProducts(keyword: string, page: number, limit: number): Promise<{ products: Product[], totalItems: number }> {
    const regex = new RegExp(keyword, 'i'); // 'i' untuk case-insensitive
    const skip = (page - 1) * limit; // Menghitung berapa banyak dokumen yang akan dilewati
    const totalItems = await this.productModel.countDocuments({ name: regex }); // Mendapatkan total item yang cocok dengan pencarian

    const products = await this.productModel
      .find({ name: regex })
      .skip(skip)
      .limit(limit)
      .exec();

    return { products, totalItems }; // Kembalikan data produk dan jumlah total item
  }

  async getProductById(id: string): Promise<Product> {
    try {
      const product = await this.productModel.findById(id).exec();
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      this.logger.error(`Failed to retrieve product with ID: ${id}`, error.stack);
      throw new Error('Failed to retrieve product');
    }
  }
}
