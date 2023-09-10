const axios = require("axios").default;
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  try {
    const { url } = req.query;
    const resd = await axios.get(url);

    res.send(resd.data);
  } catch (err) {
    res.send(err);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    console.log("Faild to start");
    return;
  }
  console.log("http://loaclhost:" + PORT);
});
