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

//DELETE TASK
router.delete("/:id", async (req, res) => {
	// delete a comment by its `id` value
	try {
		const task = await Task.destroy({ where: { id: req.params.id } });
		res.status(200).json(task);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
