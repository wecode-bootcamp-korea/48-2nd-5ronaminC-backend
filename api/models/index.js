const appDataSource = require("./dataSource");

const userDao = require("./userDao");
const wishDao = require("./wishDao");

const orderDao = require("./orderDao");

module.exports = {
  appDataSource,
  userDao,
  wishDao,
  orderDao,
};
