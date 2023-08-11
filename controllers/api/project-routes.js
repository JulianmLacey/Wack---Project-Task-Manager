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
        const { name, mission_statement, manager_id } = req.body;
        const user_id = req.session.user_id;
        const newProject = Project.create({
            name: name,
            mission_statement: mission_statement,
            user_id: user_id,
            manager_id: manager_id
        });
        res.status(200).json(newProject);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router