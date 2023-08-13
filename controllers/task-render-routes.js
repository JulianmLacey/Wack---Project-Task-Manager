const router = require('express').Router();
const {  Task, Project, User } = require('../../models');

router.get('/tasks', async (req, res) => {
    try{
        const tasks = await Task.findAll({
            where: {project: res.session.project},
        });
        res.render('tasksboard', {tasks});
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching tasks')
    }
});