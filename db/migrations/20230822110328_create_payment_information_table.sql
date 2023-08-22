-- migrate:up
CREATE TABLE payment_information (
  id integer PRIMARY KEY AUTO_INCREMENT,
  user_id integer NOT NULL,
  product_id integer NOT NULL,
  order_id varchar(200) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT payment_information_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT payment_information_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id),
  CONSTRAINT payment_information_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders (id)
);

-- migrate:down
DROP TABLE payment_information;

