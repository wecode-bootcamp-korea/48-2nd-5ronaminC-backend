-- migrate:up
CREATE TABLE reviews (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  content VARCHAR(300) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT reviews_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE reviews;
