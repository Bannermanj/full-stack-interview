const express = require("express");
const router = express.Router();
const Battle = require("../models/Battle");

router.get("/", (req, res) => {
  Battle.find({})
    .sort({ createdAt: "desc" })
    .exec((err, battles) => {
      res.send({
        battles
      });
    });
});

router.post("/create", (req, res) => {
  console.log(req.body);
  const battle = new Battle(req.body);
  // console.log(battle);
  // battle.save(err => {
  //   if (err) return res.status(500).send(err);
  //   return res.status(200).send(battle);
  // });
});

module.exports = router;
