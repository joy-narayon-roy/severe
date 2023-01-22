const { Schema, model } = require("mongoose");

const conSchema = new Schema({
  name: String,
  phone: String,
});

const Contects = model("Contects", conSchema);

module.exports = Contects;
