const mongoose = require("mongoose");

const robotSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    color: {
      type: String
    },
    attack: {
      type: Number,
      default: 0
    },
    defense: {
      type: Number,
      default: 0
    },
    hasSuperMove: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  { collection: "robots" }
);

module.exports = mongoose.model("robots", robotSchema);
