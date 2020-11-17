const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user-model");
const Order = require("../models/order-model");

const SECRET = process.env.SECRET;

const createToken = (user, secret, expiresIn = "24h") => {
  return jwt.sign({ email: user.email }, secret, { expiresIn });
};

const verifyToken = (req) => {
  const token = req.headers["authorization"];
  if (token) {
    try {
      return jwt.verify(token, SECRET);
    } catch (e) {
      console.log(e, "Your session expried. Sign in again");
    }
  }
};

module.exports = {
  signin: async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "Email not found" });
    }

    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isValidPassword) {
      return res.status(400).json({ message: "Password not correct" });
    }

    const token = createToken(user, SECRET);

    return res.status(200).json({ token });
  },
  signup: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({ message: "User already exist" });
      }

      const newUser = await new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
      }).save();

      const token = createToken(newUser, SECRET);

      res.status(201).json({ token });
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const items = await User.find({});
      res.status(200).json({ success: true, data: items });
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  },
  currentUser: async (req, res) => {
    try {
      const decoded = await verifyToken(req);
      const user = await User.findOne({ email: decoded.email });

      if (user) {
        const orderHistory = await Order.find({ email: user.email });
        res.status(200).json({ user, orderHistory });
      }
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  },
};
