-- migrate:up
ALTER TABLE wishlists DROP FOREIGN KEY wishlists_user_id_fkey;
ALTER TABLE wishlists DROP FOREIGN KEY wishlists_product_id_fkey;

ALTER TABLE wishlists DROP KEY user_id, DROP KEY product_id;
ALTER TABLE wishlists ADD UNIQUE unique_wishlists (user_id, product_id);

ALTER TABLE wishlists ADD CONSTRAINT wishlists_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE wishlists ADD CONSTRAINT wishlists_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id);

-- migrate:down
