const { cartService } = require("../services");
const { catchAsync } = require("../utils/error");

const deleteCartProduct = catchAsync(async (req, res) => {
  // const userId = req.user.id;
  const userId = 3;
  const { productId } = req.params;

  console.log("productId : ", productId);

  await cartService.deleteCartProduct(userId, productId);

  res.status(204).json({ message: "delete complete" });
});

module.exports = {
  deleteCartProduct,
};
