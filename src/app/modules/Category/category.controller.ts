import { Request, Response } from "express";
import { CategoryService } from "./category.services";

const createCategory = async(req: Request, res: Response) =>{
    const data = req.body;

    const result = await CategoryService.createCategoryIntoDB(data);

    return res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Create product successfully',
        data: result
    })
};

const getAllCategory = async(req: Request, res: Response) =>{
    const result = await CategoryService.getAllCategoryFromDB();

    return res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Get all product successfully',
        data: result
    })
}

export const CategoryController = {
    createCategory,
    getAllCategory
}