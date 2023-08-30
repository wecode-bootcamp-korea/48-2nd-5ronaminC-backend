const appDataSource = require("./dataSource");

const deleteCartProduct = async (userId, productId) => {
  try {
    const result = await appDataSource.query(
      `
      DELETE FROM carts WHERE product_id IN (?) AND user_id = ?;
      `,
      [productId, userId]
    );

    const deletedRows = result.affectedRows;

    if (deletedRows == 0) throw new Error("[caution] not authorized user");
    else if (deletedRows !== 0 && deletedRows !== 1)
      throw new Error("UNEXPECTED_NUMBER_OF_RECORDS_DELETED");

    return deletedRows;
  } catch (err) {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

module.exports = {
  deleteCartProduct,
};
