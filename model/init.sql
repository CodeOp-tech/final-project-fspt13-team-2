DROP TABLE if exists posts;
DROP TABLE if exists users;
DROP TABLE if exists votes;

CREATE TABLE posts (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  content TEXT(255) NOT NULL,
  created_date DATETIME NOT NULL,
  image VARCHAR(100) NOT NULL
);

INSERT INTO posts (user_id, vote_id, content, created_date) VALUES(1, 1, "Banana bread", 2023-03-05 08:18:45, "https://www.simplyrecipes.com/thmb/tR-5eHAZ3lgNR6Yvu3yxdHMNpk8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-2-63dd39af009945d58f5bf4c2ae8d6070.jpg")


CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nick VARCHAR(25) NOT NULL,
  email VARCHAR(89) NOT NULL,
  password VARCHAR(50) NOT NULL
);

INSERT INTO users (nick, email, password) VALUES('john89', "johndoe@gmail.com", "secretpassword");


CREATE TABLE votes (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  post_id INT NOT NULL,
  wow INT NOT NULL,
  meh INT NOT NULL
);





