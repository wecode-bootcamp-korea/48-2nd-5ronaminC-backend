const express = require('express');
const { showroomController } = require('../controllers');
const { loginRequired } = require('../utils/auth');

const routes = express.Router();

routes.get("/", loginRequired, showroomController.getShowroom);
routes.get('/category', showroomController.getCategory);
routes.get('/preferredstore', showroomController.getPreferredStore);





module.exports = routes;                