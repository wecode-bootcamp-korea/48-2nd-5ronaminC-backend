const { cartService } = require("../services");
const { catchAsync } = require("../utils/error");

const getCartList = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const cartList = await cartService.getCartList(userId);

  res.status(200).json({ data: cartList });
});

module.exports = {
  getCartList,
};
