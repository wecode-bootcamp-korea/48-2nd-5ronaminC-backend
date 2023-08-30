const appDataSource  = require('./dataSource');

const getCartId = async(userId, productId) => {
    try {
        const [ cartId ] = await appDataSource.query(
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
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    }
}

const getProductsByCart = async(userId, productId, productCount) => {
    
    try{
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
            [ userId, productId, productCount ]
        );
    
        return product;
    } catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    }

};

const updateProductsByCart = async(productId, updateproductQuantity, cartId) => {
    try {
        const updateByCart = await appDataSource.query(
            `
            UPDATE carts
            SET 
                product_id = ?,
                product_quantity = ?
            WHERE id = ?;
            `
            ,
            [productId, updateproductQuantity, cartId]
        );
        return updateByCart;
    } catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    }
    
};

module.exports = {
    getCartId,
    getProductsByCart,
    updateProductsByCart
}