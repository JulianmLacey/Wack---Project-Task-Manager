const router = require('express').Router();
const { Project, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const projects = await Project.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ],
        });
        console.log(projects);
        res.status(200).json(projects);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

router.post('/', async (req, res) => {
    // create a new Project
    try {
        const { id, name, missions_statement, manager_id } = req.body;
        const newProject = await Project.create({
            id,
            name,
            missions_statement,
            manager_id,

        });
        res.status(200).json(newProject);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router