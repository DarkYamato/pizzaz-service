const router = require("express").Router();

const Usertrl = require("../controllers/user-ctrl");

router.post("/signin", Usertrl.signin);
router.post("/signup", Usertrl.signup);
router.get("/all", Usertrl.getAll);
router.get("/currentUser", Usertrl.currentUser);

module.exports = router;
