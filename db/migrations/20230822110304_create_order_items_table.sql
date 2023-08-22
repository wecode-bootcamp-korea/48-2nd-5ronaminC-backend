-- migrate:up
CREATE TABLE order_items (
  id integer PRIMARY KEY AUTO_INCREMENT,
  order_id varchar(200)  NOT NULL,
  product_id integer NOT NULL,
  order_item_quantity integer NOT NULL, 
  order_item_price integer NOT NULL,
  CONSTRAINT order_items_proudct_id_fkey FOREIGN KEY (product_id) REFERENCES products (id),
  CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders (id)
);

-- migrate:down
DROP TABLE order_items;
