const { orderDao } = require("../models");
const { addShippingFee } = require("../utils/shippingFee");

const getOrderInformation = async (userId) => {
  const orderInformation = await orderDao.getOrderInformation(userId);

  const orderInformationResult = addShippingFee(orderInformation);

  return orderInformationResult;
};

const payCartProducts = async (
  userId,
  productId,
  productQuantity,
  subtotalPrice,
  totalOrderPrice,
  point
) => {
  const [usersPoint] = await orderDao.isEnoughPoint(userId);

  const pointStringToInt = parseInt(usersPoint["point"]);

  if (pointStringToInt < parseInt(totalOrderPrice)) return "잔액 부족";
  else
    return await orderDao.payCartProducts(
      userId,
      productId,
      productQuantity,
      subtotalPrice,
      totalOrderPrice,
      point
    );
};

module.exports = {
  getOrderInformation,
  payCartProducts,
};
