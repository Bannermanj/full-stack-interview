const express = require("express");
const router = express.Router();
const Robot = require("../models/Robot");

router.get("/", (req, res) => {
  Robot.find({})
    .sort({ createdAt: "desc" })
    .exec((err, profiles) => {
      res.send({
        profiles
      });
    });
});

router.post("/create", (req, res) => {
  const robot = new Robot(req.body);
  console.log(robot);
  robot.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(robot);
  });
});

router.post("/delete", (req, res) => {
  const { _id } = req.body;
  Robot.findByIdAndRemove(_id, (err, deletedRobot) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(deletedRobot);
  });
});

module.exports = router;
