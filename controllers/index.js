const router = require("express").Router();
const { Project, Comment, Task, User } = require("../models");
//const apiRoutes = require("./api");
const loginRoutes = require("./login-routes");

router.use("/", loginRoutes);
//router.use("/api", apiRoutes);

//GET USERS
// router.get("/", async (req, res) => {
// 	try {
// 		const UserData = await User.findAll();

// 		res.status(200).json(UserData);
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });

//GET PROJECTS

module.exports = router;
