-- migrate:up
ALTER TABLE users MODIFY point decimal(11,2) DEFAULT 10000.00;

-- migrate:down
