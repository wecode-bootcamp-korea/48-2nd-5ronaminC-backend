const { orderDao } = require("../models");
const { addShippingFee } = require("../utils/shippingFee");

const getOrderInformation = async (userId) => {
  const orderInformation = await orderDao.getOrderInformation(userId);

  const orderInformationResult = addShippingFee(orderInformation);

  return orderInformationResult;
};

module.exports = {
  getOrderInformation,
};
