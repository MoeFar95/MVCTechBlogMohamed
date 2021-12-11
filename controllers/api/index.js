const router = require("express").Router();
const userRoutes = require("./userroutes");
const postRoutes = require("./postroutes");

router.use("/user", userroutes);
router.use("/post", postroutes);

module.exports = router;