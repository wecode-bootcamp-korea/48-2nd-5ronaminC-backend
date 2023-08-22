-- migrate:up
CREATE TABLE carts (
  id integer PRIMARY KEY AUTO_INCREMENT,
  user_id integer NOT NULL,
  product_id integer NOT NULL,
  product_quantity integer NOT NULL,
  CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE carts;
