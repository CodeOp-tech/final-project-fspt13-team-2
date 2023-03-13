DROP TABLE if exists posts;
DROP TABLE if exists users;
DROP TABLE if exists votes;

CREATE TABLE posts (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  content TEXT,
  created_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  image VARCHAR(500)
);



CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nick VARCHAR(25) NOT NULL,
  email VARCHAR(89) NOT NULL,
  password TEXT NOT NULL
);

INSERT INTO users (nick, email, password) VALUES('john89', "johndoe@gmail.com", "secretpassword");


CREATE TABLE votes (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  post_id INT NOT NULL,
  user_id INT NOT NULL
  wow TINYINT NOT NULL,
);
