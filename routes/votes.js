var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET votes listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM votes;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


/* CREATE a vote. */
router.post("/create", async (req, res) => {
  const {post_id, user_id, wow} = req.body;

  if (!post_id){
    res.status(400).send({ message: "post_id is missing"});
    return;
  }

  if (!user_id){
    res.status(400).send({ message: "user_id is missing"});
    return;
  }

  if (wow===null){
    res.status(400).send({ message: "wow is missing"});
    return;
  }

  try {
    const results = await db(
      `SELECT * FROM votes WHERE post_id = ${post_id} AND user_id = ${user_id}`
    );
    const vote = results.data.length > 0 ? results.data[0] : null;
 
    if (vote) {
      if (!!vote.wow === wow) {
        await db(`DELETE FROM votes WHERE post_id = ${post_id} AND user_id = ${user_id}`);
        res.send({message: "post vote deleted"})
      } else {
        await db(`UPDATE votes SET wow = ${wow} WHERE post_id = ${post_id} AND user_id = ${user_id}`);
        res.send({message: "post vote updated"})
      }
      
    } else {
      await db(`INSERT INTO votes (post_id, user_id, wow) VALUES (${post_id}, ${user_id}, ${wow})`);
      res.send({ message: "Post voted"});
    }



    
  } catch(error) {
    res.status(500).send(error)
  }
});

/* update a vote. */


module.exports = router;