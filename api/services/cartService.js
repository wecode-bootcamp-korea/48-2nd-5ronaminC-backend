const { cartDao } = require("../models");

const getCartList = async (userId) => {
  //return await cartDao.getCartList(userId);

  const cartList = await cartDao.getCartList(userId);
  const [cartListFirstElement] = cartList;

  console.log(cartListFirstElement);

  const totalProductPrice = parseInt(cartListFirstElement.totalProductPrice);

  if (cartList) {
    let shippingFee = 0;
    if (30000 < totalProductPrice && totalProductPrice <= 60000) {
      shippingFee = 6000;
    } else if (0 < totalProductPrice && totalProductPrice <= 30000) {
      shippingFee = 3000;
    }

    for (let i = 0; i < cartList.length; i++) {
      cartList[i]["shippingFee"] = shippingFee;
      cartList[i]["totalOrderPrice"] = totalProductPrice + shippingFee;
    }
  }

  return cartList;
};

const deleteCartProduct = async (userId, productId) => {
  return await cartDao.deleteCartProduct(userId, productId);
};

module.exports = {
  getCartList,
  deleteCartProduct,
};
