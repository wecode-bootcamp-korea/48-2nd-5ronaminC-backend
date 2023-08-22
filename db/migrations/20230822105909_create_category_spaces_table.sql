-- migrate:up
CREATE TABLE category_spaces (
  id integer PRIMARY KEY AUTO_INCREMENT,
  category_space_name varchar(50) NOT NULL
);

-- migrate:down
DROP TABLE category_spaces;
