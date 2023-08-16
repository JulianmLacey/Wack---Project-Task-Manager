const router = require("express").Router();
const { User, Task, Project, Comment } = require("../models");
const Auth = require("../utils/auth");

router.get("/", Auth, async (req, res) => {
	if (req.session.logged_in) {
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
			if (userData.projects.length) {
				const projectData = userData.projects.map((project) => project.get({ plain: true }));
				const taskData = userData.projects[0].tasks.map((task) => task.get({ plain: true }));
				const commentData = userData.projects[0].comments.map((task) => task.get({ plain: true }));
				console.log(req.session.user_id);
				res.render("home", {
					projectData,
					taskData,
					commentData,
					logged_in: true,
				});
			} else {
				res.render("home", {
					logged_in: true,
				});
			}
		} catch (err) {
			res.status(500).json(err);
			return;
		}
	} else {
		res.redirect("/signup");
	}
});

/*
router.get("/", Auth, async (req, res) => {
	console.log(req);
	try {
		const userData = await User.findOne({
			where: { id: req.session.user_id },
			include: [
				{
					model: Project,
					as: "projects",
				},
			],
		});

		const projData = await Project.findOne({
			where: { id: req.body.id },
			include: [{ all: true, nested: true }],
		});

		const projectData = userData.projects.map((project) => project.get({ plain: true }));
		const taskData = projData.tasks.map((task) => task.get({ plain: true }));
		const commentData = projData.comments.map((task) => task.get({ plain: true }));
		//res.status(200).json(projData[0].tasks);

		res.render("home", {
			projectData,
			taskData,
			commentData,
			logged_in: true,
		});
		//, {
		//...data,
		//logged_in: req.session.logged_in,
		//});
	} catch (err) {
		res.status(500).json(err);
		return;
	}
});
*/
router.get("/login", async (req, res) => {
	res.render("login");
});

router.get("/signup", async (req, res) => {
	res.render("signup");
});

module.exports = router;
