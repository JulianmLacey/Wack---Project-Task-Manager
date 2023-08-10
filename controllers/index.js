const router = require("express").Router();
//const apiRoutes = require("./api");

//router.use("/api", apiRoutes);

router.post("/login", (req, res) => {
	console.log(req.body);
});

module.exports = router;
