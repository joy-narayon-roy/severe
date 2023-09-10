require("dotenv").config();
const express = require("express");
const mongooes = require("mongoose");
const app = express();
const router = require("./router");
const cors = require("cors");

var corsOptions = {
  origin: "*",
};

function tinyLogger(req, res, next) {
  console.log(`${req.method} - ${req.path}`);
  next();
}

app.use([
  tinyLogger,
  express.static("./public"),
  cors(corsOptions),
  express.urlencoded({
    extended: true,
  }),
]);
app.use(router);

const DB_REMOTE_URL = `mongodb+srv://Joy:${process.env.DB_PASSWORD}@cluster0.xbov4.mongodb.net/?retryWrites=true&w=majority`;

const DB_LOCAL = `mongodb://127.0.0.1:27017`;

const PORT = process.env.PORT || 8080;

mongooes.connect(DB_REMOTE_URL, (err) => {
  console.clear();
  if (err) {
    console.log("DB Not Connected.");
    console.error(err);
  } else {
    console.log("DB Connected.");
    app.listen(PORT, (error) => {
      if (error) {
        console.error("Server Error.");
        console.log(error);
      } else {
        console.error(`Server http://localhost:${PORT}`);
      }
    });
  }
});
