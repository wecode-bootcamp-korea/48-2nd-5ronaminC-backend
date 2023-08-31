-- migrate:up
ALTER TABLE payment_information ADD CONSTRAINT payment_information_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders (id);

-- migrate:down
