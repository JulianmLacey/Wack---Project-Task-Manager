const router = require("express").Router();
const userRoutes = require("./user-routes");
const projectRoutes = require("./project-routes");
const commentRoutes = require("./comment-routes");
const taskRoutes = require("./task-routes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);

module.exports = router;
