-- migrate:up
CREATE TABLE preferred_stores (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  stores_name VARCHAR(200) NOT NULL
);

-- migrate:down
DROP TABLE preferred_stores;