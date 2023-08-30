const express = require('express');
const routes = express.Router();

const userRouter = require('./userRouter');
const mainRouter = require('./mainRouter');

routes.use('/users', userRouter);
routes.use('/main', mainRouter);

module.exports = routes;