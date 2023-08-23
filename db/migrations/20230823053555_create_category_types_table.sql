-- migrate:up
CREATE TABLE category_types (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  category_type_name VARCHAR(50) NOT NULL
);

-- migrate:down
DROP TABLE category_types;
