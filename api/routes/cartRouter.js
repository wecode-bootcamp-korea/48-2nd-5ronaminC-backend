const express = require("express");
const { cartController } = require("../controllers");
const { loginRequired } = require("../utils/auth");

const routes = express.Router();

routes.get("/", loginRequired, cartController.getCartList);

module.exports = routes;
