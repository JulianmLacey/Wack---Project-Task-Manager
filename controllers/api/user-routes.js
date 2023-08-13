const router = require("express").Router();
const { User } = require("../../models/");

/* /api/users
POST / - ADD USER
GET / - GET ALL USERS



*/

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

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

router.post("/projects", async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.findAll(req.body, {
      where: (user_id = req.body.user_id),
      include: { Model: Project },
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
//post logout
router.post("/logout", (req, res) => {
  // if (req.session.logged_in) {
  req.session.destroy(() => {
    res.status(204).end();
  });
  // } else {
  //   res.status(404).end();
  // }
});

//put update user

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    if (username && password) {
      const userData = await User.create({
        username,
        password,
      });
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.log_in = true;
        res.status(200).json("Successful");
      });
    } else {
      res.status(400).json({ message: "Error" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
});

//delete user

module.exports = router;
