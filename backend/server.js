import express from 'express'; // in package.json file write   ( "type": "module",) to use import feature//
// to use nodemon type ( "scripts": { "nodemon": "nodemon backend/server.js" } in package.json and type "npm run nodemon"//
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopoogy: true,
  useCreateIndex: true,
}); 


app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.get('/', (req, res) => {
  res.send('server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message }); //error catcher middleware for almost every non defined error
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is ready in ${5000}`);
});
