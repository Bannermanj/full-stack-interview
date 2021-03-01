const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

//Import Mongoose Models
require("./models/Robot");
require("./models/User");
require("./models/Battle");

mongoose
  .connect(
    "mongodb+srv://dbUserOne:dbUserOnePassword@cluster0.fn8hj.mongodb.net/fullstackexercise?retryWrites=true&w=majority",
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }
  )
  .then(res => {
    console.log("Database Connected Successfully");
  })
  .catch(err => {
    console.log("Database Error: " + err);
  });

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
