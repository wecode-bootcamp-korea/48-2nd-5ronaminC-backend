const { cartDao } = require("../models");

const getCartList = async (userId) => {
  return await cartDao.getCartList(userId);
};

const deleteCartProduct = async (userId, productId) => {
  return await cartDao.deleteCartProduct(userId, productId);
};

module.exports = {
  getCartList,
  deleteCartProduct,
};
