require("dotenv").config();
const express = require("express");
const mongooes = require("mongoose");
const app = express();
const router = require("./router");
const cors = require("cors");

var corsOptions = {
  origin: "*",
};

app.use([
  express.static("./public"),
  cors(corsOptions),
  express.urlencoded({
    extended: true,
  }),
]);
app.use(router);

const DB_URL = `mongodb+srv://Joy:${process.env.DB_PASSWORD}@cluster0.xbov4.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 8080;

mongooes.connect(DB_URL, (err) => {
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
