import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.get('/product/:id', ProductController.getProduct)
router.get('/product', ProductController.getAllProduct)

export const ProductRouter = router;