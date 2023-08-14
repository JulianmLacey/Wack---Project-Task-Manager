const router = require("express").Router();
const userRoutes = require("./user-routes");
const projectRoutes = require("./project-routes");
const commentRoutes = require("./comment-routes");
const taskRoutes = require("./tasks-routes");

router.use("/user", userRoutes);
router.use("/comment", commentRoutes);
router.use("/project", projectRoutes);
router.use("/tasks", taskRoutes);

module.exports = router;
