const router = require("express").Router();
const { User, Project, Task, Comment } = require("../../models/");

/* /api/users
POST / - ADD USER
GET / - GET ALL USERS
PUT /:projects - Add User to Organization
GET /projects
POST /login - login user
*/
//POST / - ADD USER
router.post("/", async (req, res) => {
	try {
		console.log(req.body);
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

//post login - check user
router.post("/login", async (req, res) => {
	try {
		const userData = await User.findOne({ where: { email: req.body.email } });
		const validPass = await userData.checkPassword(req.body.password);

		if (!userData || !validPass) {
			res.status(200).json({ message: "Incorrect email or password" });
			return;
		}
		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.log_in = true;
			res.status(200).json(userData);
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

//POST /logout - logout user
router.post("/logout", (req, res) => {
	if (req.session.logged_in) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

//put update user
router.put("/projects", async (req, res) => {
	try {
		const user = await User.findOne({ where: { id: req.session.user_id } });
		user.addProject(req.body.id);
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/projects", async (req, res) => {
	try {
		const user = await User.findOne({
			where: { id: req.session.user_id },
			include: [
				{
					model: Project,
					as: "projects",
					include: [
						{ model: Task, as: "tasks" },
						{ model: Comment, as: "comments" },
					],
				},
			],
		});
		//const projects = await user.getProjects();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

//delete user

module.exports = router;
