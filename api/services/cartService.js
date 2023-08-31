const { cartDao } = require("../models");
const { addShippingFee } = require("../utils/shippingFee");

const addProductCart = async (userId, productId, productCount) => {
  const getCartId = await cartDao.getCartId(userId, productId);

  if (!getCartId) {
    return await cartDao.appProductsByCart(userId, productId, productCount);
  } else {
    const cartId = getCartId.id;
    return await cartDao.updateProductsByCart(productCount, cartId);
  }
};

const getCartList = async (userId) => {
  const cartList = await cartDao.getCartList(userId);

  const cartListResult = addShippingFee(cartList);

  return cartListResult;
};

module.exports = {
  getCartList,
  addProductCart,
};
