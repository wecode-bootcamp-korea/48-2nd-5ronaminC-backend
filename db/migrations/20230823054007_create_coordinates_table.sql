-- migrate:up
CREATE TABLE coordinates (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  coordinate_x INTEGER NOT NULL,
  coordinate_y INTEGER NOT NULL
);

-- migrate:down
DROP TABLE coordinates;
