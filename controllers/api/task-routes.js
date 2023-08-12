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

//UPDATE TASK

//DELETE TASK
module.exports = router;