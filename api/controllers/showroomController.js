const { showroomService } = require('../services');
const { catchAsync } = require('../utils/error');

const getShowroom = catchAsync(async (req, res) => {
    const { spaceCategoryId } = req.query; 

    const spaceCategory = await showroomService.getShowroom(spaceCategoryId);

    res.status(200).json({ data: spaceCategory });
});

const getCategory = async (req, res) => {
    const category = await showroomService.getCategory();

    res.status(200).json({ data: category });
};

const getPreferredStore = catchAsync(async (req, res) => {
    const { storeId } = req.body;

    const preferredStore = await showroomService.getPreferredStore(storeId);

    res.status(200).json({ data: preferredStore });
});


module.exports = {
    getShowroom,
    getCategory,
    getPreferredStore,
}