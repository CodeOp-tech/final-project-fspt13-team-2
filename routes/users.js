var express = require('express');
const { defaultBaseSortFn } = require('match-sorter');
var router = express.Router();
const db = require("../model/helper") //added this

/* GET users listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM users;")
  .then(results => {
    res.send(results.data)
  })
  .catch(err => res.status(500).send(err))
});

module.exports = router;



