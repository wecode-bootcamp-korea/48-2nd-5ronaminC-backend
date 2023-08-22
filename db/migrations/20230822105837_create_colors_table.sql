-- migrate:up
CREATE TABLE colors (
  id integer PRIMARY KEY AUTO_INCREMENT,
  color_name varchar(100) NOT NULL
);

-- migrate:down
DROP TABLE colors;
