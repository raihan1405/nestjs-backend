//bisa dibilang ini adalah route

import { Controller, Get,Query ,Param} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Get('search')
  async searchProducts(@Query('keyword') keyword: string): Promise<Product[]> {
    return this.productsService.searchProducts(keyword);
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    return this.productsService.getProductById(id);
  }
}
