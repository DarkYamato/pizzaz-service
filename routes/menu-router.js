const router = require("express").Router();

const MenuCtrl = require("../controllers/menu-ctrl");

router.get("/", MenuCtrl.getAll);
router.get("/seed", MenuCtrl.insert);
router.get("/clear", MenuCtrl.clear);

module.exports = router;
