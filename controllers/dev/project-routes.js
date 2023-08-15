const router = require("express").Router();
const { Project, Comment, User, Task } = require("../../models/");

/* /dev/Project
GET / - GET ALL Project
POST / - ADD Project
PUT /:id - UPDATE Project
DELETE /:id - DELETE Project
*/

//GET ALL TASKS
router.get("/", async (req, res) => {
	try {
		const projects = await Project.findAll();
		res.status(200).json(projects);
	} catch (err) {
		res.status(400).json(err);
	}
});

//GET SINGLE Project
router.get("/:id", async (req, res) => {
	try {
		console.log(req.params.id);
		const proj = await Project.findOne({
			where: { id: req.params.id },
			include: [{ all: true, nested: true }],
		});
		res.status(200).json(proj);
	} catch (err) {
		res.status(400).json(err);
	}
});

//ADD NEW Project
router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const newUser = await Project.create(req.body);
		res.status(200).json(newUser);
	} catch (err) {
		res.status(400).json(err);
	}
});

//UPDATE Project
router.put("/:id", async (req, res) => {
	try {
		const proj = await Project.findByPK(req.params.id);
		proj.set(req.body);
		await proj.save();
		res.status(200).json(proj);
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE Project
router.delete("/:id", async (req, res) => {
	try {
		const Project = await Project.findByPK(req.params.id);
		Project.destroy();
		await res.status(200).json(Project);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
