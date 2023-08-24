const wishDao = require('../models/wishDao');

const addwishProduct = async (userId, productId) => {
    
    return await wishDao.addwishProduct(userId, productId);
    
};

module.exports = {
    addwishProduct
};