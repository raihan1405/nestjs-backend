import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Category } from './category.schema'; // Import Category schema

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: String, default: "-" })
  price: string;

  @Prop({ type: String, default: "No discount found" })
  discount: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category', required: true }) // Reference to Category
  category: Category;

  @Prop({ type: String, default: "-" })
  brand: string;

  @Prop({ required: true, type: String, default: "1 pcs" })
  minPurchase: string;

  @Prop({ required: true, type: String, default: "1 kg" })
  unitWeight: string;

  @Prop({ required: true, type: String, default: "-" })
  sizeDimensions: string;

  @Prop({ required: true, default: "-" })
  seller: string;

  @Prop({ type: String, default: "0" })
  ratings: string;

  @Prop({ required: true, default: "-" })
  productImage: string;

  @Prop({ type: String, default: "No image found" })
  bumnImage: string;  // This field represents the BUMN image or a placeholder text.

  @Prop({ required: true, default: "-" })
  description: string;

  @Prop({ type: String, default: "-" })
  imagePath: string; // Path or ID for the main product image

  @Prop({ type: String, default: "-" })
  bumnImagePath: string; // Path or ID for the BUMN image
}

export const ProductSchema = SchemaFactory.createForClass(Product);
