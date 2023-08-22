-- migrate:up
CREATE TABLE preferred_stores (
  id integer PRIMARY KEY AUTO_INCREMENT,
  stores_name varchar(200) NOT NULL
);

-- migrate:down
DROP TABLE preferred_stores;