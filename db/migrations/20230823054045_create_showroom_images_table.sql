-- migrate:up
CREATE TABLE showroom_images (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  category_space_id INTEGER NOT NULL,
  showroom_image_url VARCHAR(300) NOT NULL,
  CONSTRAINT showrooms_category_space_id_fkey FOREIGN KEY (category_space_id) REFERENCES category_spaces (id)
);

-- migrate:down
DROP TABLE showroom_images;
