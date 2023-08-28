const { cartDao } = require("../models");

const deleteCartProduct = async (userId, productId) => {
  return await cartDao.deleteCartProduct(userId, productId);
};

module.exports = {
  deleteCartProduct,
};
