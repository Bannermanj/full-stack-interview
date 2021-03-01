const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    robots: [
      {
        all: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Robot"
        }
      }
    ],
    hasFavoriteRobot: {
      type: Boolean
    },
    favoriteRobot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Robot"
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  { collection: "users" }
);

module.exports = mongoose.model("users", userSchema);
