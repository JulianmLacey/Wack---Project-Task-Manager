const router = require("express").Router();
const { Task, Project } = require("../../models");

//CREATE TASKS
router.post("/", async (req, res) => {
	try {
		const newTask = await Task.create(req.body);
		newTask.user_id = req.session.user_id;
		await newTask.save();
		res.status(200).json(newTask);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const newTask = await Task.findOne({ where: { id: req.params.id } });

		res.status(200).json(newTask);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/", async (req, res) => {
	try {
		const newTask = await Task.findOne({ where: { id: req.body.id } });

		res.status(200).json(newTask);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/:id", async (req, res) => {
	try {
		console.log(editedTask);
		const updatedTask = await Task.update(
			{
				taskName: req.body.taskName,
				description: req.body.description,
				status: req.body.status,
				priority: req.body.priority,
				timeline: req.body.timeline,
			},
			{ where: { id: req.params.id } }
		);
		res.status(200).json(updatedTask);
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE TASK
router.delete("/", async (req, res) => {
	// delete a comment by its `id` value
	try {
		const task = await Task.destroy({ where: { id: req.params.id } });
		res.status(200).json(task);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
