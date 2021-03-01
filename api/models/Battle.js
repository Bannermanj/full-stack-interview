const mongoose = require("mongoose");

const battleSchema = new mongoose.Schema(
  {
    participantOne: {
      type: String
    },
    participantTwo: {
      type: String
    },
    winner: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  { collection: "battles" }
);

module.exports = mongoose.model("battles", battleSchema);
