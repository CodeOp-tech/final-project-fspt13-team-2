var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
var db = require("../model/helper");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

const supersecret = process.env.SUPER_SCERET;

// GET users listing 
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

// POST to register new users 
router.post("/register", async (req, res) => {
  const { nick, password } = req.body; 

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    
    await db(
      `INSERT INTO users (nick, password) VALUES ("${nick}", "${hash})`
    );

    res.send({ message : "Register successfull"});
  } catch (err) {
    res.status(400).send({ message: err.message});
  }
});

// POST to login existing users
router.post("/login", async (req, res) => {
  const { nick, password } = req.body; 

  try {
    const results = await db(
      `SELECT * FROM users WHERE nick = "${nick}"`
    );

    const user = results.data[0];
    if (user) {
      const user_id = user.id;

      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) throw new Error("Incorrect password");

      var token = jwt.sign({ user_id}, supersecret);
      res.send({ message: "Login successful, here is your token", token })
    } else {
      res.status(404).send();

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