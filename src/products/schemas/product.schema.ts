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

  @Prop({ type: String, default: "No category found" })
  category: string;

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

  @Prop({ type: String, default: "-" })
  sentFrom: string; // Added sentFrom field

  @Prop({ type: String, default: "0" })
  ratingProduct: string; // Renamed from 'ratings' to 'ratingProduct'

  @Prop({ type: String, default: "0 Terjual" })
  soldQuantity: string; // Added soldQuantity field

  @Prop({ type: String, default: "-" })
  taxProduct: string; // Added taxProduct field

  @Prop({ type: String, default: "Not available" })
  stock: string; // Added stock field

  @Prop({ required: true, default: "-" })
  productImage: string;

  @Prop({ type: String, default: "No image found" })
  bumnImage: string;

  @Prop({ type: String, default: "5" })
  ratingStore: string; // Added ratingStore field

  @Prop({ type: String, default: "Not available" })
  totalSold: string; // Added totalSold field

  @Prop({ type: String, default: "-" })
  taxStore: string; // Added taxStore field

  @Prop({ required: true, default: "-" })
  description: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
