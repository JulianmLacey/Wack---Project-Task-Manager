const router = require("express").Router();
const { Task, Project } = require("../../models");

//GET ALL TASKS
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll({
            include: [
                {
                    model: Project,
                    attributes: ['id']
                }
            ],
        });
        console.log(tasks);
        res.status(200).json(tasks);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

//GET INDIVIDUAL TASK
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk({
            include: [
                {
                    model: Project,
                    attributes: ['id']
                }
            ]
        });
        console.log(task);
        res.status(200).json(task);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});
//CREATE TASKS
router.post('/', async (req, res) => {
    try {
        const { taskName, description, date_created, status, priority, timeline } = req.body;
        const projectId = req.body.project_id;
        const newTask = await Task.create({
            taskName,
            description,
            date_created,
            status,
            priority,
            timeline,
            project_id: projectId
        });
        res.status(200).json(newTask);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE TASK
router.delete('/:id', async (req, res) => {
    // delete a comment by its `id` value
    try {
        const task = await Task.destroy({ where: { id: req.params.id } })
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;