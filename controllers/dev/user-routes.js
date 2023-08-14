const router = require("express").Router();
const { User } = require("../../models/");

/* /dev/user
GET / - GET ALL USERS
POST / - ADD User
PUT /:id - UPDATE USER
DELETE /:id - DELETE USER
*/

//GET ALL USERS
router.get("/", async (req, res) => {
	try {
		const users = await User.findAll();
		res.status(200).json(users);
	} catch (err) {
		res.status(400).json(err);
	}
});

//GET SINGLE USER
router.get("/:id", async (req, res) => {
	try {
		const user = await User.findByPK(req.params.id);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json(err);
	}
});

//ADD NEW USER
router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const newUser = await User.create(req.body);
		res.status(200).json(newUser);
	} catch (err) {
		res.status(400).json(err);
	}
});

//UPDATE USER
router.put("/:id", async (req, res) => {
	try {
		const user = await User.findByPK(req.params.id);
		user.set(req.body);
		await user.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE USER
router.delete("/:id", async (req, res) => {
	try {
		const user = await User.findByPK(req.params.id);
		user.destroy();
		await res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
