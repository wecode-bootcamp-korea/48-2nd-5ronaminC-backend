const { wishService } = require('../services');
const { catchAsync } = require('../utils/error');

 const addWishProduct = catchAsync(async (req, res) => {
    const productId  = req.params.productId;
    const userId = req.user.id;

    await wishService.addWishProduct(
      userId,
      productId
    );

    res.status(201).json({ message: "Product successful add to wishlists" });
 });

 module.exports = {
    addWishProduct
 };