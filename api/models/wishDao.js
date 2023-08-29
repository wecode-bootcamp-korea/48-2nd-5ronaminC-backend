const  appDataSource  = require('./dataSource');

const addWishProduct = async (userId, productId) => {
    
    try {
        const addWishData = await appDataSource.query(
            `
            INSERT INTO wishlists (
                user_id, 
                product_id
            ) VALUES (
                ?,
                ?
            );
            `,
            [userId, productId]
        );
        
        return addWishData;
    } catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    }
};


module.exports = {
    addWishProduct
};