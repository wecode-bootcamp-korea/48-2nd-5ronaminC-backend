-- migrate:up
ALTER TABLE order_items DROP FOREIGN KEY order_items_order_id_fkey;

-- migrate:down
