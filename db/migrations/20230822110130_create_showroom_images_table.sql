-- migrate:up
CREATE TABLE showroom_images (
  id integer PRIMARY KEY AUTO_INCREMENT,
  category_space_id integer NOT NULL,
  showroom_image_url varchar(300) NOT NULL,
  CONSTRAINT showrooms_category_space_id FOREIGN KEY (category_space_id) REFERENCES category_spaces (id)
);

-- migrate:down
DROP TABLE showroom_images;
