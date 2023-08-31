const appDatasource = require('./dataSource');

const getProduct = async (spaceCategoryId) => {
    try {
        const result = await appDatasource.query(
            `
            SELECT 
            p.id AS id,
            p.product_name AS productName,
            p.price AS price,
            p.description AS description,
            c.category_space_name AS categorySpaceName,
            o.coordinate_x AS coordinateX,
            o.coordinate_y AS coordinateY,
            t.category_type_name AS categoryTypeName
            FROM products p 
            INNER JOIN coordinates o ON p.coordinate_id = o.id
            INNER JOIN category_types t ON p.category_type_id = t.id
            LEFT JOIN category_spaces c ON p.category_space_id = c.id
            WHERE p.category_space_id = ?
            `,
            [spaceCategoryId]
        );
        return result   
    } catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    }
};

const getShowroom = async (spaceCategoryId) => {
    try{
        const [result] = await appDatasource.query(
            `
            SELECT
            s.id AS id,
            s.showroom_image_url AS showroomImageUrl,
            c.category_space_name AS categorySpaceName
            FROM showroom_images s
            INNER JOIN category_spaces c ON s.category_space_id = c.id
            WHERE s.category_space_id = ?
            `,
            [spaceCategoryId]
        );
        return result
    } catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    }
};

const getCategory = async () => {
    try{
        const result = await appDatasource.query(
            `
            SELECT
            id AS id,
            category_space_name AS categorySpaceName
            FROM category_spaces
            `
        );
        return result
    } catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    }
};

const getPreferredStore = async (storeId) => {
    try{
        const result = await appDatasource.query(
            `
            SELECT
            stores_name AS storesName
            FROM preferred_stores 
            WHERE preferred_stores.id = ?
            `,
            [storeId]
        );
        return result
    } catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    }
};

module.exports = {
    getProduct,
    getShowroom,
    getCategory,
    getPreferredStore,
}