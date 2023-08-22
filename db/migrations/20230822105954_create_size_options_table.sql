-- migrate:up
CREATE TABLE size_options (
  id integer PRIMARY KEY AUTO_INCREMENT,
  option_name varchar(50) NOT NULL,
  category_type_id integer NOT NULL,
  CONSTRAINT size_options_category_type_id_fkey FOREIGN KEY (category_type_id) REFERENCES category_types (id)
);

-- migrate:down
DROP TABLE size_options;
