import { Products } from '../Product/product.model';
import { TCart } from './Cart.interface';
import { Cart } from './Cart.model';

const createCartIntoDB = async (payload: TCart) => {
  const updateProduct = await Products.findById(payload.productId);

  const Quantity = updateProduct?.quantity;

  if (Quantity !== 0) {
    const result = await Cart.create(payload);

    const updatedQuantity = (Quantity as number) - payload.productQuantity;

    await Products.findByIdAndUpdate(
      payload.productId,
      { quantity: updatedQuantity },
      { new: true },
    );
    return result;
  }else{
    const message = 'Stock Out';
    return message
  }
};

export const CartServices = {
  createCartIntoDB,
};
