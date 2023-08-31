const { mainDao } = require('../models');

const getShowroom = async (productId = 1) => {
    const showroom = await mainDao.getShowroom(productId);
    const products = await mainDao.getProduct(productId);

    return { showroom, products };
};

const getCategory = async () => {
    return await mainDao.getCategory();
};

const getPreferredStore = async (storeId) => {
    return await mainDao.getPreferredStore(storeId);
};

module.exports = {
    getShowroom,
    getCategory,
    getPreferredStore,
}