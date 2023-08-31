-- migrate:up
ALTER TABLE order_items ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders (id);

-- migrate:down
