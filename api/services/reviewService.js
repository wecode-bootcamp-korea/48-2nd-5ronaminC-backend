const { reviewDao } = require('../models');

const addReviewProduct = async (userId, productId, content) => {
    
    return await reviewDao.addReviewProduct(userId, productId, content);
    
};

const getAllReviewList = async (productId) => {

    return await reviewDao.getAllReviewList(productId);

}

module.exports = {
    addReviewProduct,
    getAllReviewList
};