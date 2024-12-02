const express = require("express");
const cors = require("cors");

const app = express();
const morgan = require("morgan");

const userRoute = require('./route/user.route')

// mongodb connection
require("./config/db");

app.use(morgan("dev"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());


//all user route
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send({
    massage: "hello bijoy",
  });
});

//wrong api rqst
app.use((req, res) => {
  res.status(404).json({
    massage: "404 error route not found",
  });
});

//server error
app.use((err, req, res, next) => {
  res.status(400).json({
    massage: "Server error",
  });
});

module.exports = app;
