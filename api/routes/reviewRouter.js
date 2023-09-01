const express = require('express');

const { reviewController } = require('../controllers');
const { loginRequired } = require('../utils/auth');

const routes = express.Router();

routes.post('/:productId', loginRequired, reviewController.addReviewProduct);
routes.get('/allreviewList/:productId', loginRequired, reviewController.getAllReviewList);

module.exports = routes;
