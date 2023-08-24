const express = require('express');

const routes  = express.Router();

const userRouter = require('./userRouter');
const wishRouter  = require('./wishRouter');

routes.use('/users', userRouter);
routes.use('/wishs', wishRouter);

module.exports = routes;
