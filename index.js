const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();
const cors = require("cors");
const menuRouter = require("./routes/menu-router");
const orderRouter = require("./routes/order-router");
const userRouter = require("./routes/user-router");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/menu", menuRouter);
app.use("/api/order", orderRouter);
app.use("/api/auth", userRouter);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("db conntected"))
  .catch((e) => {
    console.error("Connection error", e.message);
  });

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
