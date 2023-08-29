const express = require("express");
const { cartController } = require("../controllers");
const { loginRequired } = require("../utils/auth");

const routes = express.Router();

routes.delete("/:productId", loginRequired, cartController.deleteCartProduct);

module.exports = routes;
