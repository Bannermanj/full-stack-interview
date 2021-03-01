const express = require("express");
const router = express.Router();

router.use("/api/users", require("./users"));
router.use("/api/robots", require("./robots"));
router.use("/api/battles", require("./battles"));

module.exports = router;
