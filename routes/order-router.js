const router = require("express").Router();

const OrderCtrl = require("../controllers/order-ctrl");

router.post("/", OrderCtrl.create);
router.get("/all", OrderCtrl.getAll);
router.get("/clear", OrderCtrl.clear);

module.exports = router;
