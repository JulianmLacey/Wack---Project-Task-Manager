const router = require("express").Router();
const { User } = require("../models");
//const Auth = require('../utils/auth');

router.get("/", async (req, res) => {
	res.render("signup");
});
router.get("/login", async (req, res) => {
	res.render("login");
});

router.post("/USERlogin", async (req, res) => {
	console.log("LOGIN ATTEMPT");
	try {
		const userData = await User.findOne({ where: { email: req.body.email } });
		const checkPass = await userData.checkPassword(req.body.password);

		if (!userData || !checkPass) {
			res.status(400).json({ message: "Incorrect email or password" });
			return;
		}

		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;

			res.json({ user: userData, message: `Welcome ${userData.name}` });
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

router.post("/USERsignup", async (req, res) => {
	console.log("SIGN UP ATTEMPT");
	console.log(req.body);
	try {
		const userData = await User.create(req.body);
		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;

			res.status(200).json(userData);
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

router.post("/logout", (req, res) => {
	if (req.session.logged_in) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});
module.exports = router;
