const express = require('express');

const { cartController } = require('../controllers');
const { loginRequired } = require('../utils/auth');

const routes = express.Router();

routes.post('/usercart', loginRequired, cartController.addProductCart);

module.exports = routes;