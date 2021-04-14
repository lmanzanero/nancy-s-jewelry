import * as functions from "firebase-functions"; 
import * as express from 'express'; 
import { createProudct, deleteProudctById, getAllProudcts, getProudctById, updateProudctById } from "./controllers/product.controller";
import { createOrder, getAllOrders, getOrderById, updateOrderById, deleteOrderById } from "./controllers/orders.controller";
// import * as cors from 'cors'; 
import authMiddleware from './middleware/authMiddleware'
// import { loginUser } from "./controllers/auth.controller";

 
const app = express();

// product routes
app.get('/products', getAllProudcts);
app.post('/product', authMiddleware,createProudct)
app.get('/product/:id', getProudctById);
app.patch('/product/:id', authMiddleware, updateProudctById);
app.delete('/product/:id', authMiddleware, deleteProudctById);

//orders routes
app.get('/orders', getAllOrders);
app.post('/order', authMiddleware, createOrder);
app.get('/order/:id', getOrderById);
app.patch('/order/:id', authMiddleware, updateOrderById);
app.delete('/order/:id', authMiddleware, deleteOrderById);


// app.post('/auth', loginUser);

app.get('/', async (req, res) => {
  res.status(200).send("API IS LIVE");
  // const user  = req.body;
  // await admin.firestore().collection('users').add(user);
  // res.status(201).send();
});

exports.api = functions.https.onRequest(app);