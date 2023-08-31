const { productDao } = require('../models');

const getDetailproduct = async(productId) => {
    
    return await productDao.getDetailproduct(productId);
};


module.exports = {
    getDetailproduct
};