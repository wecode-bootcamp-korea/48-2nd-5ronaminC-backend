-- migrate:up
CREATE TABLE products (
  id integer PRIMARY KEY AUTO_INCREMENT,
  product_name varchar(255) NOT NULL,
  price integer NOT NULL,
  description varchar(500) NOT NULL,
  width integer NOT NULL,
  depth integer NOT NULL,
  height integer NULL,
  color_id integer NOT NULL,
  category_space_id integer NOT NULL,
  category_type_id integer NOT NULL,
  size_option_id integer NULL,
  coordinate_id integer NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT products_color_id_fkey FOREIGN KEY (color_id) REFERENCES colors (id),
  CONSTRAINT products_category_space_id_fkey FOREIGN KEY (category_space_id) REFERENCES category_spaces (id),
  CONSTRAINT products_category_type_id_fkey FOREIGN KEY (category_type_id) REFERENCES category_types (id),
  CONSTRAINT products_size_option_id_fkey FOREIGN KEY (size_option_id) REFERENCES size_options (id),
  CONSTRAINT products_coordinate_id_fkey FOREIGN KEY (coordinate_id) REFERENCES coordinates (id)
);


-- migrate:down
DROP TABLE products;
