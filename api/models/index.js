const appDataSource = require('./dataSource');
const userDao = require('./userDao');
const wishDao = require("./wishDao");
const cartDao = require("./cartDao");
const orderDao = require("./orderDao");
const mainDao = require('./mainDao');

module.exports = {
    appDataSource,
    userDao,
    wishDao,
    cartDao,
    orderDao,
    mainDao,
};