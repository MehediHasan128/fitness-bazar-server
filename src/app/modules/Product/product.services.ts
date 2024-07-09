import { Products } from "./product.model";

const getSigleProduct = async (productId: string) =>{
    const result = await Products.findById(productId);
    return result;
};


const getAllProductFromDB = async () =>{
    const result = await Products.find();
    return result;
}


export const ProductServices = {
    getSigleProduct,
    getAllProductFromDB
}