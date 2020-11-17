const Order = require("../models/order-model");

module.exports = {
  create: async (req, res) => {
    try {
      const newOrder = await new Order(req.body).save();
      res.status(200).json({ success: true, data: newOrder });
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const items = await Order.find({});
      res.status(200).json({ success: true, data: items });
    } catch (e) {
      res.status(500).json({
        success: false,
        message: e,
      });
    }
  },
  clear: (req, res) => {
    try {
      Order.deleteMany({}, (err, res) => console.log(err, res));
      res.json({success: true})
    } catch (e) {
      console.log(e);
    }
  },
};
