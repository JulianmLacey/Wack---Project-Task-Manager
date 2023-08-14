const router = require("express").Router();
const { Task } = require("../../models/");

/* /dev/task
GET / - GET ALL Task
POST / - ADD Task
PUT /:id - UPDATE Task
DELETE /:id - DELETE Task
*/

//GET ALL TASKS
router.get("/", async (req, res) => {
	try {
		const tasks = await Task.findAll();
		res.status(200).json(tasks);
	} catch (err) {
		res.status(400).json(err);
	}
});

//GET SINGLE TASK
router.get("/:id", async (req, res) => {
	try {
		const task = await Task.findByPK(req.params.id);
		res.status(200).json(task);
	} catch (err) {
		res.status(400).json(err);
	}
});

//ADD NEW TASK
router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const newUser = await Task.create(req.body);
		res.status(200).json(newUser);
	} catch (err) {
		res.status(400).json(err);
	}
});

//UPDATE TASK
router.put("/:id", async (req, res) => {
	try {
		const task = await Task.findByPK(req.params.id);
		task.set(req.body);
		await task.save();
		res.status(200).json(task);
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE TASK
router.delete("/:id", async (req, res) => {
	try {
		const task = await Task.findByPK(req.params.id);
		task.destroy();
		await res.status(200).json(task);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
