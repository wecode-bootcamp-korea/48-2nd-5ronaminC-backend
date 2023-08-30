const appDataSource = require("./dataSource");

const getOrderInformation = async (userId) => {
  try {
    const data = await appDataSource.query(
      `
      `,
      [userId]
    );
    return data;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

module.exports = {
  getOrderInformation,
};
