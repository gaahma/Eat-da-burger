DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

use burger_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger VARCHAR(50),
  devoured BOOLEAN DEFAULT 0,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);



