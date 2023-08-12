const router = require("express").Router();
const apiRoutes = require("./api");
const loginRoutes = require("./login-routes");
const homeRoutes = require('./home-routes')


router.use("/", loginRoutes);
router.use("/api", apiRoutes);
router.use('/home', homeRoutes);


module.exports = router;
