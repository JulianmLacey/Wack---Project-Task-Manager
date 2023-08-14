const router = require("express").Router();
const { User, Task, Project, Comment } = require("../models");
const Auth = require("../utils/auth");

router.get("/", Auth, async (req, res) => {
	try {
		const userData = await User.findOne({
			where: { id: req.session.user_id },
			include: [
				{
					model: Project,
					as: "projects",
					include: [{ all: true, nested: true }],
				},
			],
		});
		const projectData = userData.projects.map((project) => project.get({ plain: true }));
		const taskData = userData.projects[0].tasks.map((task) => task.get({ plain: true }));
		const commentData = userData.projects[0].comments.map((task) => task.get({ plain: true }));
		console.log(projectData);
		res.render("home", {
			projectData,
			taskData,
			commentData,
			logged_in: true,
		}); //, {
		//...data,
		//logged_in: req.session.logged_in,
		//});
	} catch (err) {
		res.status(500).json(err);
		return;
	}
});

router.get("/login", async (req, res) => {
	res.render("login");
});

router.get("/signup", async (req, res) => {
	res.render("signup");
});

module.exports = router;
