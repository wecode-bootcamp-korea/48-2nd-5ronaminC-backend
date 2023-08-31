const express = require("express");
const { cartController } = require("../controllers");
const { loginRequired } = require("../utils/auth");

const routes = express.Router();

routes.post("/addcart", loginRequired, cartController.addProductCart);
routes.post("/usercart", loginRequired, cartController.addProductCart);
routes.get("/", loginRequired, cartController.getCartList);
routes.delete("/:productId", loginRequired, cartController.deleteCartProduct);

module.exports = routes;
