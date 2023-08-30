const { cartDao } = require('../models');

const addProductCart = async(userId, productId, productCount) => { 
    const getCartId = await cartDao.getCartId(userId, productId);

    if (!getCartId) {
        return await cartDao.getProductsByCart(userId, productId, productCount);
    } else {
        const cartId = getCartId.id
        const updateproductQuantity = parseInt(productCount) + parseInt(getCartId.product_quantity);
        return await cartDao.updateProductsByCart( productId, updateproductQuantity, cartId);
    }
};

module.exports = {
    addProductCart
}