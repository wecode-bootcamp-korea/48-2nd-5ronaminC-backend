const express = require('express');

const { wishController } = require('../controllers');
// const { loginRequired } = require('../utils/auth');

const routes = express.Router();

routes.post('/:productId', wishController.addwishProduct);

module.exports = routes;
