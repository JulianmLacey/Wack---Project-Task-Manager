const router = require('express').Router();
const { Project, User } = require('../../models');


//post projects

router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.findAll({
            where: { userId: req.session.userId },
        });
        res.render('projects', { projects });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching projects');
    }
});
