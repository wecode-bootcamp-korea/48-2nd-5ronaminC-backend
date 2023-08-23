-- migrate:up
CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  order_name VARCHAR(200) NOT NULL UNIQUE,
  user_id INTEGER NOT NULL,
  order_status_code_id INTEGER NOT NULL DEFAULT 1,
  CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT orders_order_status_code_id_fkey FOREIGN KEY (order_status_code_id) REFERENCES order_status_codes (id)
);

-- migrate:down
DROP TABLE orders;
