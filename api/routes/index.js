const express = require("express");

const routes = express.Router();

const userRouter = require('./userRouter');
const wishRouter = require("./wishRouter");
const cartRouter = require("./cartRouter");
const orderRouter = require("./orderRouter");
const showroomRouter = require('./showroomRouter');
const productRouter = require('./productRouter');
const reviewRouter = require('./reviewRouter');

routes.use('/users', userRouter);
routes.use("/wishs", wishRouter);
routes.use("/carts", cartRouter);
routes.use("/orders", orderRouter);
routes.use('/showroom', showroomRouter);
routes.use('/products', productRouter);
routes.use('/reviews', reviewRouter);

module.exports = routes;
