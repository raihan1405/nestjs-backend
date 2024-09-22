import { Controller, Get, Query, Param } from '@nestjs/common';
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
  async searchProducts(
    @Query('keyword') keyword: string,
    @Query('page') page: number = 1, // Halaman default adalah 1
    @Query('limit') limit: number = 50 // Limit default adalah 10 item per halaman
  ): Promise<{ products: Product[], totalItems: number }> {
    return this.productsService.searchProducts(keyword, page, limit);
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    return this.productsService.getProductById(id);
  }
}
