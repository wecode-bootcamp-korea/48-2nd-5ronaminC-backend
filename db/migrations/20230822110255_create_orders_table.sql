-- migrate:up
CREATE TABLE orders (
  id varchar(200) PRIMARY KEY,
  user_id integer NOT NULL,
  order_status_code_id integer NOT NULL,
  CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT orders_order_status_code_id_fkey FOREIGN KEY (order_status_code_id) REFERENCES order_status_codes (id)
);

-- migrate:down
DROP TABLE orders;
