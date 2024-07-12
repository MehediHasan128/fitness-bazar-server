import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.get('/product/:id', ProductController.getProduct)
router.get('/product', ProductController.getAllProduct)
router.patch('/product/:productId', ProductController.updateProduct)
router.delete('/product/:productId', ProductController.deleteProduct)

export const ProductRouter = router;