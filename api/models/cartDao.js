const appDataSource = require("./dataSource");

const getCartId = async (userId, productId) => {
  try {
    const [cartId] = await appDataSource.query(
      `
      SELECT id, product_quantity
      FROM carts
        WHERE 
            user_id = ? AND
            product_id = ?;
        `,
      [userId, productId]
    );
    return cartId;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

const addProductsByCart = async (userId, productId, productCount) => {
  try {
    const product = await appDataSource.query(
      `
      INSERT INTO carts (
        user_id,
                product_id,
                product_quantity
                ) VALUES (
                ?,
                ?,
                ?
                );       
                `,
      [userId, productId, productCount]
    );

    return product;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

const updateProductsByCart = async (productCount, cartId) => {
  try {
    const updateByCart = await appDataSource.query(
      `
      UPDATE carts
      SET 
      product_quantity = product_quantity + ?
      WHERE id = ?;
      `,
      [productCount, cartId]
    );
    return updateByCart;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

const isCartEmpty = async (userId) => {
  try {
    const data = await appDataSource.query(
      `
      SELECT id, user_id, product_id, product_quantity
      FROM carts
      WHERE user_id = ?
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

const getCartList = async (userId) => {
  try {
    const data = await appDataSource.query(
      `
      SELECT DISTINCT
        ca.user_id userId,
        ca.product_id productId,
        ca.product_quantity productQuantity,
        (SELECT SUM(product_quantity)
          FROM carts
          WHERE user_id = ?) AS totalProductQuantity,
        p.product_name productName,
        p.price,
        p.width,
        p.depth,
        p.height,
        p.description,
        p.color_id colorId,
        co.color_name colorName,
        p.size_option_id sizeOptionId,
        s.option_name sizeOptionName,
        (SELECT pis.product_image_url 
      FROM product_images pis 
      WHERE ca.product_id = pis.product_id 
        AND pis.image_number = 1) AS productImageUrl,
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
      [userId, userId, userId]
    );
    return data;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

const deleteCartProduct = async (userId, productId) => {
  const queryRunner = await appDataSource.createQueryRunner();
  try {
    await queryRunner.startTransaction();

    const result = await appDataSource.query(
      `
      DELETE FROM carts WHERE product_id IN (?) AND user_id = ?;
      `,
      [productId, userId]
    );

    const deletedRows = result.affectedRows;

    if (deletedRows == 0) throw new Error("[Caution] Unauthorized User");
    else if (deletedRows !== 0 && deletedRows !== 1)
      throw new Error("UNEXPECTED_NUMBER_OF_RECORDS_DELETED");

    await queryRunner.commitTransaction();
  } catch {
    await queryRunner.rollbackTransaction();

    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  } finally {
    await queryRunner.release();
  }
};

module.exports = {
  getCartId,
  addProductsByCart,
  updateProductsByCart,
  isCartEmpty,
  getCartList,
  deleteCartProduct,
};
