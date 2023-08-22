-- migrate:up
CREATE TABLE product_images (
  id integer PRIMARY KEY AUTO_INCREMENT,
  product_id integer NOT NULL,
  product_image_url varchar(300) NOT NULL,
  CONSTRAINT product_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_images;
