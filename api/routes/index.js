const express = require("express");

const routes = express.Router();

const userRouter = require('./userRouter');
const wishRouter = require("./wishRouter");
const cartRouter = require("./cartRouter");
const orderRouter = require("./orderRouter");
const showroomRouter = require('./showroomRouter');
<<<<<<< HEAD
const reviewRouter = require('./reviewRouter');
=======
const productRouter = require('./productRouter');
>>>>>>> origin

routes.use('/users', userRouter);
routes.use("/wishs", wishRouter);
routes.use("/carts", cartRouter);
routes.use("/orders", orderRouter);
routes.use('/showroom', showroomRouter);
<<<<<<< HEAD
routes.use('/reviews', reviewRouter);
=======
routes.use('/products', productRouter);
>>>>>>> origin

module.exports = routes;
