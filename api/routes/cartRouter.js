const express = require("express");
const { cartController } = require("../controllers");
const { loginRequired } = require("../utils/auth");

const routes = express.Router();

routes.get("/", loginRequired, cartController.getCartList);
routes.delete("/:productId", cartController.deleteCartProduct);

module.exports = routes;
