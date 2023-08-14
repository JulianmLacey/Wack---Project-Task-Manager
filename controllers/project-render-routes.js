const { findByPk } = require('../models/USER');

const router = require('express').Router();
// const { Project, User } = require('../models');


//post projects

router.get('/create', async (req, res) => {
    try {
        const loggedIn = req.session.logged_in
        console.log(req.session)
        if (!loggedIn) {
            res.redirect('/login')
        } else {
            res.render('project-create', { loggedIn: req.session.logged_in });
        }
    } catch (error) {
        console.log(error);
        res.status(400);
    }
});



module.exports = router;

