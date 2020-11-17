const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema({
  order: [{ id: Number, counter: Number }],
  total: String,
  createdDate: {
    type: Date,
    default: Date.now,
  },
  status: { type: String, default: "DELIVERED" },
  email: String,
});

module.exports = mongoose.model("order", Order);
