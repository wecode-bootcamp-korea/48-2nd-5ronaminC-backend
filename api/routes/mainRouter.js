const express = require('express');
const { mainController } = require('../controllers');
const { loginRequired } = require('../utils/auth');

const routes = express.Router();

routes.get("/", loginRequired, mainController.getShowroom);
routes.get('/category', mainController.getCategory);
routes.get('/preferredstore', mainController.getPreferredStore);
// routes.get("", mainController.getAllList); /*쿼리파라미터*/




module.exports = routes;                