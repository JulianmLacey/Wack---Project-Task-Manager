const router = require("express").Router();
const apiRoutes = require("./api");
const viewRoutes = require("./view-routes");
const dev = require("./dev");

router.use("/", viewRoutes);
router.use("/api", apiRoutes);
router.use("/dev", dev);

module.exports = router;
