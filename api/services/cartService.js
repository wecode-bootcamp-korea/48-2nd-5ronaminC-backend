const { cartDao } = require('../models');

const addProductCart = async(userId, productId, productCount) => { 
    const getCartId = await cartDao.getCartId(userId, productId);

    if (!getCartId) {
        return await cartDao.appProductsByCart(userId, productId, productCount);
    } else {
        const cartId = getCartId.id
        return await cartDao.updateProductsByCart( productCount, cartId);
    }
};

module.exports = {
    addProductCart
}