const express = require("express");
const { orderController } = require("../controllers");
const { loginRequired } = require("../utils/auth");

const routes = express.Router();

routes.get("/", loginRequired, orderController.getOrderInformation);

module.exports = routes;
