import express, { Application } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './app/middlwares/globalErrorHandelaer';
import { ProductRouter } from './app/modules/Product/product.route';
import { CategoryRouter } from './app/modules/Category/category.route';
const app: Application = express();

app.use(express.json());
app.use(cors());


// using product router
app.use('/api/v1', ProductRouter);
app.use('/api/v1', CategoryRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// User global error handler
app.use(globalErrorHandler);

export default app;
