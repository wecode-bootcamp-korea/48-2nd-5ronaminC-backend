const express = require('express');

const { wishController } = require('../controllers');

const routes = express.Router();

routes.post('/:productId', wishController.addWishProduct);

module.exports = routes;
