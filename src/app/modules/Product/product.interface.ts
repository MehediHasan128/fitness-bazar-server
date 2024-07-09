import { Types } from "mongoose";

export type TProduct = {
    name: string;
    price: number;
    description: string;
    images: string;
    quantity: string;
    category: string;
    categoryId: Types.ObjectId;
}