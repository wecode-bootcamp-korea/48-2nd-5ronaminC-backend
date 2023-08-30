const { cartDao } = require("../models");

const getCartList = async (userId) => {
  const cartList = await cartDao.getCartList(userId);
  const [cartListFirstElement] = cartList;

  console.log("cartListFirstElement");
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

  console.log("cartList");
  console.log(cartList);

  return cartList;
};

module.exports = {
  getCartList,
};
