DROP TABLE if exists books;

CREATE TABLE books (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(300) NOT NULL,
  author VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description LONGTEXT NOT NULL,
  image VARCHAR(300) NOT NULL
);
