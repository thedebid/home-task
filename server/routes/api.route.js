const router = require("express").Router();

const authRoute = require("../modules/auth/auth.route");

router.use("/auth", authRoute);

module.exports = router;
