-- migrate:up
CREATE TABLE category_spaces (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  category_space_name VARCHAR(50) NOT NULL
);

-- migrate:down
DROP TABLE category_spaces;
