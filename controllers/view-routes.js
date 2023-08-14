const router = require("express").Router();
const { User } = require("../models");
//const Auth = require('../utils/auth');

router.get("/", async (req, res) => {
	//if (req.session.log_in) {
	try {
		const user = await User.findOne({
			where: { id: req.session.user_id },
			include: [
				{
					model: Project,
					as: "projects",
					include: [
						{ model: Task, as: "tasks" },
						{ model: Comment, as: "comments" },
					],
				},
			],
		});
		//const projects = await user.getProjects();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
	res.render("home");
	//} else {
	//	res.render("login");
	//}
});

router.get("/login", async (req, res) => {
	res.render("login");
});

router.get("/signup", async (req, res) => {
	res.render("signup");
});

module.exports = router;
