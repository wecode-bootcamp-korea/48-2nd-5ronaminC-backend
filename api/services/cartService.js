const { cartDao } = require("../models");

const addProductCart = async (userId, productId, productCount) => {
  const getCartId = await cartDao.getCartId(userId, productId);

  if (!getCartId) {
    return await cartDao.addProductsByCart(userId, productId, productCount);
  } else {
    const cartId = getCartId.id;
    return await cartDao.updateProductsByCart(productCount, cartId);
  }
};

const deleteCartProduct = async (userId, productId) => {
  return await cartDao.deleteCartProduct(userId, productId);
};

module.exports = {
  addProductCart,
  deleteCartProduct,
};
