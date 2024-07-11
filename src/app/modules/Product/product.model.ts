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
      imageUrl: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      categoryId: {
        type: Schema.Types.ObjectId
      },
      isDeleted: {
        type: Boolean,
        default: false
      }
});

export const Products = model<TProduct>('product', ProductSchema);