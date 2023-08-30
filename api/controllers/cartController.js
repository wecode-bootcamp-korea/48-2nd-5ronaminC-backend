const { cartService } = require("../services");
const { catchAsync } = require("../utils/error");

const getCartList = catchAsync(async (req, res) => {
  //const userId = 2; // 테스트용
  const userId = req.user.id;

  const cartList = await cartService.getCartList(userId);

  res.status(200).json({ data: cartList });
});

// try catch or catchasync 양자택일
const deleteCartProduct = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const productId = req.query.postId;

  console.log("req.query.postId : ", productId);

  try {
    await cartService.deleteCartProduct(userId, productId);

    res.status(204).json({ message: "delete complete" });
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
});

module.exports = {
  getCartList,
  deleteCartProduct,
};
