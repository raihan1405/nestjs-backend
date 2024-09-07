import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

  async getAllCategories(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async categorySuggestion(keyword: string): Promise<Category[]> {
    const regex = new RegExp(keyword, 'i'); // 'i' untuk case-insensitive
    return this.categoryModel.find({ name: regex }).sort({ _id: -1 }).exec();
  }
}
