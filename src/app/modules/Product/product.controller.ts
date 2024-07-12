import { Request, Response } from "express";
import { ProductServices } from "./product.services";

const getProduct = async (req: Request, res: Response) =>{
    const productId = req.params.id;

    const result = await ProductServices.getSigleProduct(productId);

    return res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Get the product successfully',
        data: result
    })
};

const getAllProduct = async (req: Request, res: Response) =>{

    const result = await ProductServices.getAllProductFromDB(req.query);

    return res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Get all product successfully',
        data: result
    })
}

const updateProduct = async(req: Request, res: Response) => {
    const {productId} = req.params;
    const updatedData = req.body;
    const result = await ProductServices.updateProductById(productId, updatedData);

    return res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Update product successfully',
        data: result
    })
}

const deleteProduct = async(req: Request, res: Response) => {
    const {productId} = req.params;
    const result = await ProductServices.deleteProductById(productId)

    return res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Product successfully deleted',
        data: result
    })
}

export const ProductController = {
    getProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
}