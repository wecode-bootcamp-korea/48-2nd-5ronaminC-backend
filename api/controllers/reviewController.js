const { reviewService } = require('../services');
const { catchAsync } = require('../utils/error');

const addReviewProduct = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const productId  = req.params.productId;
    const content = req.body.content;
    
    await reviewService.addReviewProduct(
      userId,
      productId,
      content
   );

   res.status(201).json({ message: "Successful add review" });
});

const getAllReviewList = catchAsync(async(req, res) => {
   const productId = req.params.productId;

   const allReviewList = await reviewService.getAllreviewList(
      productId
   );

   res.status(201).json({ data: allReviewList });   
})

 module.exports = {
    addReviewProduct,
    getAllReviewList
 };