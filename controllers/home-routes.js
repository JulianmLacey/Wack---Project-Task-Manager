const { Project, User, Comment, Task } = require('../models')
const router = require('express').Router()

//Get all posts with associated user
router.get('/', async (req, res) => {
    try {
        const allProjects = await Project.findAll({
            include: [{ model: User }]
        })
        const parsedProjects = allProjects.map((project) => {
            const parsedProject = project.get({ plain: true });
            parsedProject.username = parsedProject.user.name;
            return parsedProject;
        });
        res.render('home', { projects: parsedProjects, loggedIn: req.session.logged_in })
    } catch (error) {
        console.log(error)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const specProject = await Project.findByPk(req.params.id, {
            include: [
                {
                    model: User,

                },
                {
                    model: Comment,
                    include: {
                        model: User
                    }
                },
                {
                    model: Task,
                    include: {
                        model: Project,
                        attributes: ['id']
                    }
                }

            ]
        });
        const parsedProject = specProject.get({ plain: true });
        console.log(parsedProject);
        parsedProject.username = parsedProject.user.name
        res.render('project', { project: parsedProject, loggedIn: req.session.logged_in });
    } catch (error) {
        console.log(error);
        res.status(400)
    }
});



module.exports = router;