const router = require("express").Router();
const { Comment } = require("../../models/");

/* /dev/comment
GET / - GET ALL COMMENTS
POST / - ADD Comment
PUT /:id - UPDATE COMMENT
DELETE /:id - DELETE COMMENT
*/

//GET ALL COMMENTS
router.get("/", async (req, res) => {
	try {
		const comments = await Comment.findAll();
		res.status(200).json(comments);
	} catch (err) {
		res.status(400).json(err);
	}
});

//GET SINGLE COMMENT
router.get("/:id", async (req, res) => {
	try {
		const comment = await Comment.findByPK(req.params.id);
		res.status(200).json(comment);
	} catch (err) {
		res.status(400).json(err);
	}
});

//ADD NEW COMMENT
router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const newComment = await Comment.create(req.body);
		res.status(200).json(newComment);
	} catch (err) {
		res.status(400).json(err);
	}
});

//UPDATE COMMENT
router.put("/:id", async (req, res) => {
	try {
		const comment = await Comment.findByPK(req.params.id);
		comment.set(req.body);
		await comment.save();
		res.status(200).json(comment);
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE COMMENT
router.delete("/:id", async (req, res) => {
	try {
		const comment = await Comment.findByPK(req.params.id);
		comment.destroy();
		await res.status(200).json(comment);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
