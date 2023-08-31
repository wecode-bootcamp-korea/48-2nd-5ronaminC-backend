const { orderDao } = require("../models");
const { orderService } = require("../services");
const { catchAsync } = require("../utils/error");

const getOrderInformation = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const orderInformation = await orderService.getOrderInformation(userId);

  res.status(200).json({ data: orderInformation });
});

const payCartProducts = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { productId, productQuantity, subtotalPrice, totalOrderPrice, point } =
    req.body;

  const paymentResult = await orderService.payCartProducts(
    userId,
    productId,
    productQuantity,
    subtotalPrice,
    totalOrderPrice,
    point
  );

  res.status(200).json({ message: paymentResult });
});

module.exports = {
  getOrderInformation,
  payCartProducts,
};
