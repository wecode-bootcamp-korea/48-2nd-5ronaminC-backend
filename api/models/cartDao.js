const appDataSource = require("./dataSource");

const getCartList = async (userId) => {
  try {
    const data = await appDataSource.query(
      // `
      // SELECT
      // c.user_id userId,
      // c.product_id productId,
      // c.product_quantity productQuantity,
      // p.product_name productName,
      // p.price,
      // p.description,
      // p.color_id colorId,
      // p.size_option_id sizeOptionId
      // FROM carts c
      // INNER JOIN products p ON p.id = c.product_id
      // WHERE c.user_id = ?;

      // `,
      `
      SELECT
        ca.user_id userId,
        ca.product_id productId,
        ca.product_quantity productQuantity,
        (SELECT SUM(product_quantity) 
          FROM carts 
          WHERE user_id = 2) AS totalProductQuantity,
        p.product_name productName,
        p.price,
        p.description,
        p.color_id colorId,
        co.color_name colorName,
        p.size_option_id sizeOptionId,
        s.option_name sizeOptionName,
        pis.product_image_url productImageUrl,
        ct.category_type_name categoryTypeName,
        ca.product_quantity * p.price AS subtotalPrice,
        (SELECT SUM(ca.product_quantity * p.price)
          FROM carts ca
          LEFT JOIN products p ON p.id = ca.product_id
          WHERE ca.user_id = ?) AS totalProductPrice
      FROM carts ca
      LEFT JOIN products p ON p.id = ca.product_id
      LEFT JOIN product_images pis ON pis.product_id = p.id
      LEFT JOIN colors co ON co.id = p.color_id
      LEFT JOIN size_options s ON s.id = p.size_option_id
      LEFT JOIN category_types ct ON ct.id = p.category_type_id
      WHERE ca.user_id = ?;
      `,
      [userId, userId]
    );
    return data;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

const deleteCartProduct = async (userId, productId) => {
  try {
    const result = await appDataSource.query(
      `
      DELETE FROM carts WHERE product_id IN (?) AND user_id = ?;
      `,
      [productId, userId]
    );

    const deletedRows = result.affectedRows;

    if (deletedRows !== 0 && deletedRows !== 1)
      throw new Error("UNEXPECTED_NUMBER_OF_RECORDS_DELETED");

    return deletedRows;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

module.exports = {
  getCartList,
  deleteCartProduct,
};
