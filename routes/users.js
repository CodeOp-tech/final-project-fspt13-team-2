var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
var db = require("../model/helper");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

const supersecret = process.env.SUPER_SECRET;

// GET users listing 
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

// POST to register new users 
router.post("/register", async (req, res) => {
  const { email, nick, password } = req.body;

  if (!email){
    res.status(400).send({ message: "Email address is required"});
    return;
  }
  if (!nick){
    res.status(400).send({ message: "Nickname is required"});
    return;
  }
  if (!password){
    res.status(400).send({ message: "Password is required"});
    return;
  }

  try {
    const results = await db(
      `SELECT * FROM users WHERE email = "${email}"`
    );

    const user = results.data[0];
    if (user){
      res.send({message : "The user already exists"})
    } else {
      const hash = await bcrypt.hash(password, saltRounds);
    
      await db(
        `INSERT INTO users (nick, email, password) VALUES ('${nick}', '${email}', '${hash}')`
      );
  
      res.send({ message : "Register successful"});
    }
    
  } catch (err) {
    res.status(400).send({ message: err.message});
  }
});

// POST to login existing users
router.post("/login", async (req, res) => {
  const { email, password } = req.body; 

  if (!email){
    res.status(400).send({ message: "Email address is required"});
    return;
  }

  if (!password){
    res.status(400).send({ message: "Password is required"});
    return;
  }  

  try {
    const results = await db(
      `SELECT * FROM users WHERE email = "${email}"`
    );

    const user = results.data[0];
    if (user) {
      const user_id = user.id;
      const nick = user.nick;
      const email = user.email;

      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) throw new Error("Incorrect password");

      const token = jwt.sign({ user_id, nick, email}, supersecret);
      res.send({ message: "Login successful", token })
    } else {
      res.send({message: "User not found"});

    }
  } catch (err) {
    res.status(400).send({ message: err.message});
  };
});

//GET one user profile
router.get("/profile", userShouldBeLoggedIn, (req, res) => {
  res.send({
    message: "Here is the protected data for user" + req.user_id,
  });
});

module.exports = router;