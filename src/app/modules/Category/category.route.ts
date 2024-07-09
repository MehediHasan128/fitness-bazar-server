import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post('/create-product', CategoryController.createCategory);

export const CategoryRouter = router;