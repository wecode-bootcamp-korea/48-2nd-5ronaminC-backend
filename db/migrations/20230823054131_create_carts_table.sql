-- migrate:up
CREATE TABLE carts (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  product_quantity INTEGER NOT NULL,
  CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE carts;
