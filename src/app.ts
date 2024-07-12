import express, { Application } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './app/middlwares/globalErrorHandelaer';
import { ProductRouter } from './app/modules/Product/product.route';
import { CategoryRouter } from './app/modules/Category/category.route';
import { CartRouter } from './app/modules/Cart/Cart.route';
const app: Application = express();

app.use(express.json());
app.use(cors());


// using product router
app.use('/', ProductRouter);
app.use('/', CategoryRouter);
app.use('/', CartRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// User global error handler
app.use(globalErrorHandler);

export default app;
