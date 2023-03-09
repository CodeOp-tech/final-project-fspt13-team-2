var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET posts listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM posts;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;

/* POST posts */

router.post("/posts", function (req, res) {
  const body = req.body
  const content = req.body.content
  const image = req.body.image

  try {
    await db(`INSERT INTO posts (content, image) values ('${content}', ${image})`)
    res.send(201)
  } catch(error) {
    res.status(500).send(error)
  }
});