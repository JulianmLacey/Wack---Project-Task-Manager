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

router.get('/:id', async (req, res) => {
    try {
        const projects = await Project.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                }
            ]
        });
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    // create a new Project
    try {
        const { name, missions_statement } = req.body;
        const userId = req.session.user_id
        const newProject = await Project.create({
            name,
            missions_statement,
            manager_id: userId

        });
        res.status(200).json(newProject);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // update a Project by its `id` value
    try {
        const project = await Project.update(req.body, { where: { id: req.params.id } })
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete a comment by its `id` value
    try {
        const project = await Project.destroy({ where: { id: req.params.id } })
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router