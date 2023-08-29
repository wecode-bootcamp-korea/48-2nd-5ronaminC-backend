const express = require('express');

const routes  = express.Router();

const userRouter = require('./userRouter');
const wishRouter  = require('./wishRouter');
const cartRouter = require('./cartRouter');

routes.use('/users', userRouter);
routes.use('/wishs', wishRouter);
routes.use('/carts', cartRouter);


module.exports = routes;
