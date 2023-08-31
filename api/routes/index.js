const express = require('express');
const routes = express.Router();

const userRouter = require('./userRouter');
const wishRouter = require("./wishRouter");
const cartRouter = require("./cartRouter");
const orderRouter = require("./orderRouter");
const mainRouter = require('./mainRouter');

routes.use('/users', userRouter);
routes.use("/wishs", wishRouter);
routes.use("/carts", cartRouter);
routes.use("/orders", orderRouter);
routes.use('/main', mainRouter);

module.exports = routes;