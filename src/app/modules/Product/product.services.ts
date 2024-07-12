import { TProduct } from "./product.interface";
import { Products } from "./product.model";

const getSigleProduct = async (productId: string) =>{
    const result = await Products.findById(productId);
    return result;
};


const getAllProductFromDB = async (query: Record<string, unknown>) =>{


    const queryObj = {...query};

    const excludesField = ['searchTerm']

    excludesField.forEach(field => delete queryObj[field])

    let searchTerm = ''

    if(query?.searchTerm){
        searchTerm = query?.searchTerm as string
    }

    const products = Products.find({isDeleted: false})

    const searchQuery = products.find({
        $or: ['name'].map((field) => ({
            [field]: {$regex: searchTerm, $options: 'i'}
        }))
    });

    const result = await searchQuery.find(queryObj)

    return result;
};

const updateProductById = async(productId: string, payload: Partial<TProduct>) => {
    const result = await Products.findByIdAndUpdate(productId, payload, {new: true});
    return result;
}

const deleteProductById = async(productId: string) => {
    const result = await Products.findByIdAndUpdate(productId, {isDeleted: true}, {new: true});
    return result;
}


export const ProductServices = {
    getSigleProduct,
    getAllProductFromDB,
    updateProductById,
    deleteProductById
}