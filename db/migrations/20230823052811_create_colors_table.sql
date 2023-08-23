-- migrate:up
CREATE TABLE colors (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  color_name VARCHAR(100) NOT NULL
);

-- migrate:down
DROP TABLE colors;
