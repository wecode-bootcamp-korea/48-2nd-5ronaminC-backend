const { mainDao } = require('../models');

const getShowroom = async (productId = 1) => {
    const showroom = await mainDao.getShowroom(productId);
    const products = await mainDao.getMain(productId);

    return { showroom, products };
};

const getCategory = async () => {
    return await mainDao.getCategory();
};

const getPreferredStore = async (storeId) => {
    return await mainDao.getPreferredStore(storeId);
};

// const getAllList = async (spaceId, productId) => {
//     const space = await mainDao.getPreferredStore(spaceId);
//     const product = await mainDao.getMain(productId);

//     return { space, product };
// };

module.exports = {
    getShowroom,
    getCategory,
    getPreferredStore,
    // getAllList,
}