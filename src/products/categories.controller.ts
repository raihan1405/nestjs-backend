import { Controller, Get, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './schemas/category.schema';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories() {
    return this.categoriesService.getAllCategories();
  }

  @Get('categorySuggestion')
  async searchProducts(@Query('keyword') keyword: string): Promise<Category[]> {
    return this.categoriesService.categorySuggestion(keyword);
  }

}
