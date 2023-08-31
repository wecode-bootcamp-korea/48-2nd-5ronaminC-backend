const { cartService } = require('../services');
const { catchAsync } = require('../utils/error');

const addProductCart = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const productId = req.body.id;
    const productCount = req.body.productCount;

    const addProductsByCart =  await cartService.addProductCart(
        userId,
        productId,
        productCount
    );

    res.status(201).json({ data: addProductsByCart });
});


 module.exports = {
    addProductCart
 };