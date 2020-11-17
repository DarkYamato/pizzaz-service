const Menu = require("../models/menu-model");
const dataSeed = require("../seeder");

module.exports = {
  getAll: async (req, res) => {
    try {
      const items = await Menu.find({});
      res.status(200).json({ success: true, data: items });
    } catch (e) {
      res.status(500).json({
        success: false,
        message: "ERROR",
      });
    }
  },
  insert: async (req, res) => {
    try {
      const items = await Menu.find({});
      if (!items.length) {
        Menu.insertMany(dataSeed, (err, res) => console.log(err, res));
      }
      res.json({ success: true });
    } catch (e) {
      console.log(e);
    }
  },
  clear: (req, res) => {
    try {
      Menu.deleteMany({}, (err, res) => console.log(err, res));
      res.json({ success: true });
    } catch (e) {
      console.log(e);
    }
  },
};
