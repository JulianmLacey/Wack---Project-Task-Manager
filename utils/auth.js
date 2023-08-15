const Auth = (req, res, next) => {
	if (!req.session.log_in) {
		console.log("not signed in");
		res.redirect("/signup");
	} else {
		next();
	}
};

module.exports = Auth;
