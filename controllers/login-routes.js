const router = require("express").Router();
const { User } = require("../models");
//const Auth = require('../utils/auth');

router.get("/", async (req, res) => {
    const loggedIn = req.session.log_in
    if (loggedIn) {
        res.render("home")
    }else {
        res.render("verify");
    }
   
});

router.get("/login", async (req, res) => {
    res.render("login");
});

router.get("/signup", async (req, res) => {
    res.render("signup");
});

module.exports = router;












