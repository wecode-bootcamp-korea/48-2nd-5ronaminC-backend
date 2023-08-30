const { orderDao } = require("../models");

const getOrderInformation = async (userId) => {
  return await orderDao.getOrderInformation(userId);
};

module.exports = {
  getOrderInformation,
};
