-- migrate:up
CREATE TABLE coordinates (
  id integer PRIMARY KEY AUTO_INCREMENT,
  coordinate_x integer NOT NULL,
  coordinate_y integer NOT NULL
);

-- migrate:down
DROP TABLE coordinates;
