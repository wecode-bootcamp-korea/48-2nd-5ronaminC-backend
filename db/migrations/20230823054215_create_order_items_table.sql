-- migrate:up
CREATE TABLE order_items (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  order_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  order_item_quantity INTEGER NOT NULL, 
  order_item_price INTEGER NOT NULL,
  CONSTRAINT order_items_proudct_id_fkey FOREIGN KEY (product_id) REFERENCES products (id),
  CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders (id)
);

-- migrate:down
DROP TABLE order_items;
