-- migrate:up
ALTER TABLE orders 
MODIFY COLUMN id INTEGER auto_increment NOT NULL;

-- migrate:down
