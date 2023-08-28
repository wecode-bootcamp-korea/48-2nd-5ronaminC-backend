const { cartService } = require("../services");
const { catchAsync } = require("../utils/error");

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
  deleteCartProduct,
};
