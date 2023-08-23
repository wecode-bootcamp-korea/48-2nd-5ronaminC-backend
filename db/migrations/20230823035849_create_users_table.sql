-- migrate:up
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR (50) NOT NULL,
  email VARCHAR(100)  NOT NULL UNIQUE,
  password CHAR(200) NOT NULL,
  birthdate DATETIME NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  gender VARCHAR(15) NOT NULL,
  address VARCHAR(255) NOT NULL,
  post_code VARCHAR(10) NOT NULL,
  preferred_store_id INTEGER NOT NULL,
  point DECIMAL (8,2) DEFAULT 10000.00,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT users_preferred_store_id_fkey FOREIGN KEY (preferred_store_id) REFERENCES preferred_stores (id)
);

-- migrate:down
DROP TABLE users;
