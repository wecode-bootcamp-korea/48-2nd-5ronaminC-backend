const appDataSource = require("./dataSource");

const getOrderInformation = async (userId) => {
  try {
    const data = await appDataSource.query(
      `
      SELECT
        u.username,
        u.phone_number,
        u.email,
        u.post_code,
        u.address,
        u.point,
          (SELECT SUM(product_quantity) 
            FROM carts 
            WHERE user_id = ?) AS totalProductQuantity,
          (SELECT SUM(ca.product_quantity * p.price)
            FROM carts ca
            LEFT JOIN products p ON p.id = ca.product_id
            WHERE ca.user_id = ?) AS totalProductPrice,
        ca.product_id productId,
        p.product_name productName,
        p.price,
        p.width,
        p.depth,
        p.height,
        p.color_id colorId,
        co.color_name colorName,
        s.option_name sizeOptionName,
        pis.product_image_url productImageUrl,
        ct.category_type_name categoryTypeName,
        ca.product_quantity productQuantity,
        ca.product_quantity * p.price AS subtotalPrice
      FROM carts ca    
      LEFT JOIN products p ON p.id = ca.product_id
      LEFT JOIN product_images pis ON pis.product_id = p.id
      LEFT JOIN colors co ON co.id = p.color_id
      LEFT JOIN size_options s ON s.id = p.size_option_id
      LEFT JOIN category_types ct ON ct.id = p.category_type_id
      LEFT JOIN users u ON u.id = ca.user_id 
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

module.exports = {
  getOrderInformation,
};
