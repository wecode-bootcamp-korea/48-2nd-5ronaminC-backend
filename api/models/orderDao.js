const short = require("short-uuid");

const appDataSource = require("./dataSource");

const getOrderInformation = async (userId) => {
  try {
    const data = await appDataSource.query(
      `
      SELECT
        u.username,
        u.phone_number phoneNumber,
        u.email,
        u.post_code postCode,
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

const isEnoughPoint = async (userId) => {
  try {
    const data = await appDataSource.query(
      `
      SELECT point
      FROM users
      WHERE id = ?;
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

const payCartProducts = async (
  userId,
  productId,
  productQuantity,
  subtotalPrice,
  totalOrderPrice,
  point
) => {
  const queryRunner = await appDataSource.createQueryRunner();
  await queryRunner.connect();
  try {
    await queryRunner.startTransaction();

    let orderNumber = short.generate();

    await appDataSource.query(
      `
      INSERT INTO 
      orders (order_name, user_id) 
      VALUES (?, ?);
      `,
      [orderNumber, userId]
    );

    for (let i = 0; i < productId.length; i++) {
      await appDataSource.query(
        `
        INSERT INTO
        order_items (order_id, product_id, order_item_quantity, order_item_price)
        VALUES (
          (SELECT id
          FROM orders 
          WHERE order_name = ?), 
          ?, ?, ?);
        `,
        [orderNumber, productId[i], productQuantity[i], subtotalPrice[i]]
      );
    }

    await appDataSource.query(
      `
      INSERT INTO payment_information (order_id) 
      VALUES (
        (SELECT id
        FROM orders 
        WHERE order_name = ?)
      );
      `,
      [orderNumber]
    );

    const result = await appDataSource.query(
      `DELETE FROM carts WHERE user_id = ?;`,
      [userId]
    );

    const deletedRows = result.affectedRows;

    if (deletedRows == 0) throw new Error("[Caution] No Product Information");
    else if (deletedRows !== productId.length)
      throw new Error("[Caution] Changed Product Quantity");

    await queryRunner.query(
      `
      UPDATE users 
      SET point = point - ?
      WHERE id = ?
      `,
      [totalOrderPrice, userId]
    );

    await queryRunner.commitTransaction();

    return "결제 완료";
  } catch (err) {
    console.log(err);
    await queryRunner.rollbackTransaction();

    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  } finally {
    await queryRunner.release();
  }
};

module.exports = {
  getOrderInformation,
  isEnoughPoint,
  payCartProducts,
};
