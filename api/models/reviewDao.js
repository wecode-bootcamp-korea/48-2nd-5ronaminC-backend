const  appDataSource  = require('./dataSource');

const addReviewProduct = async (userId, productId, content) => {
    
    try {
        const addReviewData = await appDataSource.query(
            `
            INSERT INTO reviews (
                user_id,
                product_id,
                content
            ) VALUES (
                ?,
                ?,
                ?
            );
            `,
            [userId, productId, content]
        );
        
        return addReviewData;
    } catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    }
};

const getAllReviewList = async(productId) => {
    
    try {
        const allReviewList = await appDataSource.query(
            `
            SELECT *
            FROM reviews 
            WHERE 
                reviews.product_id = ?;
            `
            ,
            [productId]
        );
        return allReviewList;
    }catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    }
}


module.exports = {
    addReviewProduct,
    getAllReviewList
};