const express = require('express');
const { userController } = require('../controllers');

const routes = express.Router();

routes.post('/signup', userController.signUp);

module.exports = routes;