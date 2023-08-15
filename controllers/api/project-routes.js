const router = require("express").Router();
const { Project, Task, User, Comment } = require("../../models");
const UUID = require("uuid-int");
const idGenerator = UUID(0);

router.get("/:id", async (req, res) => {
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
			where: { id: req.params.id },
			include: [{ all: true, nested: true }],
		});
		const projectData = userData.projects.map((project) => project.get({ plain: true }));
		const taskData = projData.tasks.map((task) => task.get({ plain: true }));
		const commentData = projData.comments.map((task) => task.get({ plain: true }));
		res.render("home", {
			projectData,
			taskData,
			commentData,
			logged_in: true,
			userId: req.session.user_id,
		});
	} catch (err) {
		res.status(500).json(err);
		return;
	}
});

// create a new Project
router.post("/", async (req, res) => {
	try {
		const newProject = await Project.create({
			id: Math.abs(idGenerator.uuid() >> 96),
			name: req.body.title,
			missions_statement: req.body.mission_statement,
			manager_id: req.session.user_id,
		});
		const user = await User.findOne({ where: { id: req.session.user_id } });
		user.addProject(newProject.id);
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete("/:id", async (req, res) => {
	// delete a comment by its `id` value
	try {
		const project = await Project.destroy({ where: { id: req.params.id } });
		res.status(200).json(project);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
