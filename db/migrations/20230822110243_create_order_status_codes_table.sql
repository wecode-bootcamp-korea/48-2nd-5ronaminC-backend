-- migrate:up
CREATE TABLE order_status_codes (
  id integer PRIMARY KEY,
  order_status_description varchar(150) NOT NULL
);

-- migrate:down
DROP TABLE order_status_codes;
