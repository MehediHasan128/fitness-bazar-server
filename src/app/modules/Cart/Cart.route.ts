import express from 'express';
import { CartController } from './Cart.controller';

const router = express.Router();

router.post('/cart', CartController.createCart);

export const CartRouter = router;