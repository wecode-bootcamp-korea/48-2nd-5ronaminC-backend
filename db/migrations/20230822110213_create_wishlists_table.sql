-- migrate:up
CREATE TABLE wishlists (
  id integer PRIMARY KEY AUTO_INCREMENT,
  user_id integer NOT NULL UNIQUE,
  product_id integer NOT NULL UNIQUE,
  CONSTRAINT wishlists_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT wishlists_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE wishlists;
