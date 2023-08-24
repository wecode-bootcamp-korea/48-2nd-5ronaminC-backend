const { wishService } = require('../services');
const { catchAsync } = require('../utils/error');

 const addWishProduct = catchAsync(async (req, res) => {
    const userId = req.body.userId; 
    const productId  = req.params.productId; 

    await wishService.addWishProduct(
        userId,
        productId
    );

    res.status(201).json({ message: "Product successful add to wishlists" });
 });

 module.exports = {
    addWishProduct
 };