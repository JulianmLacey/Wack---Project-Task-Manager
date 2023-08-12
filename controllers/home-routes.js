const { Project, User } = require('../models')
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

        res.render('home', { projects: parsedProjects, loggedIn: req.session.log_in })
    } catch (error) {
        console.log(error)
    }
})