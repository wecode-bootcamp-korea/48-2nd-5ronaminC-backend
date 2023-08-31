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
  deleteCartProduct,
};
