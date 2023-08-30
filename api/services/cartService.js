const { cartDao } = require("../models");
const { addShippingFee } = require("../utils/shippingFee");

const getCartList = async (userId) => {
  const cartList = await cartDao.getCartList(userId);

  const cartListResult = addShippingFee(cartList);

  return cartListResult;
};

module.exports = {
  getCartList,
};
