const { wishService } = require('../services');
const { catchAsync } = require('../utils/error');

 const addWishProduct = catchAsync(async (req, res) => {
    const productId  = req.params.productId;

    await wishService.addWishProduct(
        req.user.id,
        productId
    );

    res.status(201).json({ message: "Product successful add to wishlists" });
 });

 module.exports = {
    addWishProduct
 };