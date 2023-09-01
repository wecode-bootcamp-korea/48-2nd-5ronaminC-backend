const  appDataSource  = require('./dataSource');

const getDetailproduct = async(productId) => {
    try {
        const productDetailPage = await appDataSource.query(
            `
            SELECT 
                p.id AS id,
                GROUP_CONCAT(pis.product_image_url) AS imageUrl,
                p.product_name AS name,
                p.price,
                p.description,
                p.width,
                p.depth,
                p.height,
                p.assembly,
                cs.category_space_name AS spaceName,
                ct.category_type_name AS typeName,
                p.coordinate_id AS coordinate,
                (SELECT COUNT(product_id) FROM reviews WHERE product_id = ?) AS totalReview,
                co.color_name  AS colorName
            FROM products p
            LEFT JOIN product_images pis ON p.id = pis.product_id
            LEFT JOIN category_spaces cs ON p.category_space_id = cs.id
            LEFT JOIN category_types ct ON p.category_type_id = ct.id
            LEFT JOIN colors co ON p.color_id = co.id 
            WHERE p.id = ?
            ;
            `
            ,
            [productId, productId]
        );
        return productDetailPage;

    }catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    }
};

module.exports = {
    getDetailproduct
};