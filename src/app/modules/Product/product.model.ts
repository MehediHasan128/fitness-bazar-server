import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const ProductSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      images: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      categoryId: {
        type: Schema.Types.ObjectId
      }
});

export const Products = model<TProduct>('product', ProductSchema);