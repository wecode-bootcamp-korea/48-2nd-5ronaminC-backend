-- migrate:up
CREATE TABLE order_status_codes (
  id INTEGER PRIMARY KEY,
  order_status_description VARCHAR(150) NOT NULL 
);

-- migrate:down
DROP TABLE order_status_codes;
