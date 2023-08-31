const express = require("express");
const { orderController } = require("../controllers");
const { loginRequired } = require("../utils/auth");

const routes = express.Router();

routes.get("/information", loginRequired, orderController.getOrderInformation);
routes.post("/payment", loginRequired, orderController.payCartProducts);

module.exports = routes;
