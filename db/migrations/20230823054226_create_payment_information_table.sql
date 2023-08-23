-- migrate:up
CREATE TABLE payment_information (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  order_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT payment_information_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders (id)
);

-- migrate:down
DROP TABLE payment_information;
