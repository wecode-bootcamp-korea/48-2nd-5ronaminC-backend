const { productService } = require('../services');
const { catchAsync } = require('../utils/error');

const getDetailproduct = catchAsync(async (req, res) => {

   const productId = req.params.productId;
   
   const productDetailPage = await productService.getDetailproduct(
      productId
   );

   res.status(200).json({ data: productDetailPage});
});


 module.exports = {
   getDetailproduct
 };