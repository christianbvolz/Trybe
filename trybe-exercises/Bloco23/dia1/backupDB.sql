DROP SCHEMA IF EXISTS b23d1;
CREATE SCHEMA b23d1;
USE b23d1;

CREATE TABLE user (
  id INT auto_increment PRIMARY KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL
);

INSERT INTO user (first_name, last_name, email, password)
VALUES ('christian', 'volz', 'christianbvolz@gmail.com', '87654321');