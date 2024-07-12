import { Request, Response } from "express";
import { CartServices } from "./Cart.services";

const createCart = async(req: Request, res: Response) => {
    const cartData = req.body;

    const result = await CartServices.createCartIntoDB(cartData);

    console.log(result);

    if(result !== 'Stock Out'){
        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Product add to cart successfully',
            data: result
        })
    }else{
        return res.status(200).json({
            success: false,
            statusCode: 200,
            message: 'Sorry this product is stock out',
        })
    }
};

export const CartController = {
    createCart
}