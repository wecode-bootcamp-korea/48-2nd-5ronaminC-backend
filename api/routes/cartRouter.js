const express = require("express");
const { cartController } = require("../controllers");

const routes = express.Router();

routes.delete("/:productId", cartController.deleteCartProduct);

module.exports = routes;
