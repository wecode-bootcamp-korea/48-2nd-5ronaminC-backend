-- migrate:up
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  description VARCHAR(500) NOT NULL,
  width INTEGER NOT NULL,
  depth INTEGER NOT NULL,
  height INTEGER NULL,
  assembly BOOLEAN NOT NULL,
  color_id INTEGER NOT NULL,
  category_space_id INTEGER NOT NULL,
  category_type_id INTEGER NOT NULL,
  size_option_id INTEGER NULL,
  coordinate_id INTEGER NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT products_color_id_fkey FOREIGN KEY (color_id) REFERENCES colors (id),
  CONSTRAINT products_category_space_id_fkey FOREIGN KEY (category_space_id) REFERENCES category_spaces (id),
  CONSTRAINT products_category_type_id_fkey FOREIGN KEY (category_type_id) REFERENCES category_types (id),
  CONSTRAINT products_size_option_id_fkey FOREIGN KEY (size_option_id) REFERENCES size_options (id),
  CONSTRAINT products_coordinate_id_fkey FOREIGN KEY (coordinate_id) REFERENCES coordinates (id)
);

-- migrate:down
DROP TABLE products;
