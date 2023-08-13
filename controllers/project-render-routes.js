const router = require('express').Router();
const { Project, User } = require('../models');


//post projects

router.get('/projects', async (req, res) => {
    try {
        res.render('project-create');
    } catch (error) {
        console.log(error);
        res.status(400);
    }
});

module.exports = router;