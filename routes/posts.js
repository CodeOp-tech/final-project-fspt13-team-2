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

/* CREATE new post. */
router.post("/create", async (req, res) => {
  const {user_id, content=null, image=null} = req.body;

  if (!user_id){
    res.status(400).send({ message: "user_id is missing"});
    return;
  }

  if (!content && !image){
    res.status(400).send({ message: "content or image is missing"});
    return;
  }



  try {
    const txtcontent = content ? `'${content}'`: null; 
    const txtimage = image ? `'${image}'`: null;

    await db(`INSERT INTO posts (user_id, content, image) VALUES (${user_id}, ${txtcontent}, ${txtimage})`);
    res.send({ message: "New post created"});
  } catch(error) {
    res.status(500).send(error)
  }
});

/* COUNT number of wow for each post. */
router.get('/wow', function(req, res, next) {
  db("SELECT posts.id, COUNT(votes.wow) AS wow_count FROM posts LEFT JOIN votes ON posts.id = votes.post_id WHERE votes.wow = true GROUP BY posts.id;")
  // db("SELECT posts.id, COUNT(CASE WHEN votes.wow = true THEN 1 END) AS wow_count, COUNT(CASE WHEN votes.wow = false 1 END) AS meh_count FROM posts LEFT JOIN votes ON posts.id = votes.post_id GROUP BY posts.id;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


module.exports = router;