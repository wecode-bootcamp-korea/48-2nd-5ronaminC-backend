const { wishService } = require('../services');
const { catchAsync } = require('../utils/error');

 const addwishProduct = catchAsync(async (req, res) => {
    const userId = req.body.user_id; 
    const productId  = req.params.productId; 

    const insertId = await wishService.addwishProduct(
        userId,
        productId
    );

    res.status(201).json({ insertId });
 });

 module.exports = {
    addwishProduct
 };