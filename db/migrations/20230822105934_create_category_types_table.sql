-- migrate:up
CREATE TABLE category_types (
  id integer PRIMARY KEY AUTO_INCREMENT,
  category_type_name varchar(50) NOT NULL
);

-- migrate:down
DROP TABLE category_types;
