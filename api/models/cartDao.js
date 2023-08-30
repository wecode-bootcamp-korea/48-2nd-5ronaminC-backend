const appDataSource = require("./dataSource");

const getCartList = async (userId) => {
  try {
    const data = await appDataSource.query(
      `
        SELECT
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
      [userId, userId, userId]
    );
    return data;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

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

const getProductsByCart = async (userId, productId, productCount) => {
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

const updateProductsByCart = async (
  productId,
  updateproductQuantity,
  cartId
) => {
  try {
    const updateByCart = await appDataSource.query(
      `
            UPDATE carts
            SET 
                product_id = ?,
                product_quantity = ?
            WHERE id = ?;
            `,
      [productId, updateproductQuantity, cartId]
    );
    return updateByCart;
  } catch {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

module.exports = {
  getCartId,
  getProductsByCart,
  updateProductsByCart,
  getCartList,
};
