-- migrate:up
CREATE TABLE users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  email varchar(100)  NOT NULL UNIQUE,
  password char(200) NOT NULL,
  birthdate datetime,
  phone_number varchar(15),
  gender varchar(15),
  address varchar(255) NOT NULL,
  post_code varchar(10) NOT NULL,
  preferred_store_id integer,
  point DECIMAL (11,2) DEFAULT 1000000.00,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT users_preferred_store_id_fkey FOREIGN KEY (preferred_store_id) REFERENCES preferred_stores (id)
);

-- migrate:down
DROP TABLE users;
