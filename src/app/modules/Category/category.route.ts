import express from 'express';
import { CategoryController } from './category.controller';
import ValidationRequest from '../../middlwares/validationRequest';
import { ProductValidationSchema } from '../Product/product.validation';

const router = express.Router();

router.post('/create-product', ValidationRequest(ProductValidationSchema), CategoryController.createCategory);
router.get('/category', CategoryController.getAllCategory);

export const CategoryRouter = router;