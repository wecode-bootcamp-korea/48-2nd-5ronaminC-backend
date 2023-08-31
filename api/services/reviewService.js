const { reviewDao } = require('../models');

const addReviewProduct = async (userId, productId, content) => {
    
    return await reviewDao.addReviewProduct(userId, productId, content);
    
};

const getAllreviewList = async (productId) => {

    return await reviewDao.getAllreviewList(productId);

}

module.exports = {
    addReviewProduct,
    getAllreviewList
};