const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Menu = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
  img: { type: String, required: true },
  composition: { type: String, required: true },
  price: {
    USD: String,
    EUR: String,
  },
});

module.exports = mongoose.model("menu", Menu);
