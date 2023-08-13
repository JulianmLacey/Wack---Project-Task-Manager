const router = require("express").Router();
const apiRoutes = require("./api");
const loginRoutes = require("./login-routes");
const homeRoutes = require('./home-routes');
const projectRoutes = require('./project-render-routes');


router.use("/", loginRoutes);
router.use("/api", apiRoutes);
router.use('/home', homeRoutes);
router.use('/project', projectRoutes);


module.exports = router;
