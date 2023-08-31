const { orderService } = require("../services");
const { catchAsync } = require("../utils/error");

const getOrderInformation = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const orderInformation = await orderService.getOrderInformation(userId);

  res.status(200).json({ data: orderInformation });
});

module.exports = {
  getOrderInformation,
};
