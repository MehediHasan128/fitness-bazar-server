import { TProduct } from "../Product/product.interface";
import { Products } from "../Product/product.model";
import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDB = async (payload: TProduct) =>{
    const existCategory = await Category.findOne({categoryName: payload.category});

    const categoryData: Partial<TCategory> = {};

    if(existCategory === null){

        // set category name
        categoryData.categoryName = payload.category;
        categoryData.categoryImage = payload.imageUrl;

        // find the the category exist or not
        const newCategory = await Category.create(categoryData);

        // Set category id in product
        payload.categoryId = newCategory._id;

        // Create ptoduct into data base
        const newProduct =  await Products.create(payload);
        return newProduct

    }else{

        // Set category id in product
        payload.categoryId = existCategory._id;

        // Create ptoduct into data base
        const newProduct =  await Products.create(payload);
        return newProduct
    }

};


const getAllCategoryFromDB = async () =>{
    const result = await Category.find();
    return result;
}

export const CategoryService = {
    createCategoryIntoDB,
    getAllCategoryFromDB
}