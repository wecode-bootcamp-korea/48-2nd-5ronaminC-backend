const express = require('express');

const { productController } = require('../controllers');
const { loginRequired } = require('../utils/auth');

const routes = express.Router();

routes.get('/showproductdetail/:productId', loginRequired, productController.getDetailproduct);

module.exports = routes;
