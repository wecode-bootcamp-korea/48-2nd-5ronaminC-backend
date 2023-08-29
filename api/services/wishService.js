const wishDao = require('../models/wishDao');

const addWishProduct = async (userId, productId) => {
    
    return await wishDao.addWishProduct(userId, productId);
    
};

module.exports = {
    addWishProduct
};