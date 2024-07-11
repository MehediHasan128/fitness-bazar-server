import { Types } from "mongoose";

export type TProduct = {
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    quantity: number;
    category: string;
    categoryId: Types.ObjectId;
    isDeleted: boolean;
}