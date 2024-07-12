import { Types } from "mongoose"

export type TCart = {
    productId: Types.ObjectId;
    productImage: string;
    productName: string;
    productPrice: number;
    productQuantity: number;
}