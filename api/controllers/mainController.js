const { mainService } = require('../services');
const { catchAsync } = require('../utils/error');

const getShowroom = catchAsync(async (req, res) => {
    const { mainId } = req.query; 
    let productId = mainId;

    if (!mainId) {
        productId = 1;
    }

    const posts = await mainService.getShowroom(productId);

    res.status(200).json({ data: posts });
});

const getCategory = async (req, res) => {
    const posts = await mainService.getCategory();

    res.status(200).json({ data: posts });
};

const getPreferredStore = catchAsync(async (req, res) => {
    const { storeId } = req.body;

    const posts = await mainService.getPreferredStore(storeId);

    res.status(200).json({ data: posts });
});


module.exports = {
    getShowroom,
    getCategory,
    getPreferredStore,
}