-- migrate:up
CREATE TABLE product_images (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  coordinate_id INTEGER NULL,
  product_image_url VARCHAR(300) NOT NULL,
  CONSTRAINT product_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id),
  CONSTRAINT product_images_coordinate_id_fkey FOREIGN KEY (coordinate_id) REFERENCES coordinates (id)
);

-- migrate:down
DROP TABLE product_images;
