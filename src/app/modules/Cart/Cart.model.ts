import { model, Schema } from "mongoose";
import { TCart } from "./Cart.interface";

const cartSchema = new Schema<TCart>({
    productId: {
        type: Schema.Types.ObjectId
    },
    productName: {
        type: String,
        required: true
      },
      productImage: {
        type: String,
        required: true
      },
      productPrice: {
        type: Number,
        required: true
      },
      productQuantity: {
        type: Number,
        required: true
      }
});

export const Cart = model<TCart>('cart', cartSchema);