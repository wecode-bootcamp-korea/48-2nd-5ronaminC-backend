-- migrate:up
ALTER TABLE payment_information DROP FOREIGN KEY payment_information_order_id_fkey;

-- migrate:down
