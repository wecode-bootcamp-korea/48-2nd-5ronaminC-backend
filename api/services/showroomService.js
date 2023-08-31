const { showroomDao } = require('../models');

const getShowroom = async (spaceCategoryId = 1) => {
    const showroom = await showroomDao.getShowroom(spaceCategoryId);
    const products = await showroomDao.getProduct(spaceCategoryId);

    return { showroom, products };
};

const getCategory = async () => {
    return await showroomDao.getCategory();
};

const getPreferredStore = async (storeId) => {
    return await showroomDao.getPreferredStore(storeId);
};

module.exports = {
    getShowroom,
    getCategory,
    getPreferredStore,
}