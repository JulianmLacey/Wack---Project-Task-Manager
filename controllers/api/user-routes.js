const router = require("express").Router();
const { User } = require("../../models/");



//POST SIGNUP - add user

router.get('/', async (req,res) => {
    try{
        const users = await User.findAll({
            
        })
    }
})

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, password } = req.body
    if (name && email && password) {
      const userData = await User.create({
        name,
        email,
        password
      })
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.status(200).json("success");
      });
    } else {
      res.status(400).json({ message: 'error' })
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

//post login - check user

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});
//post logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//put update user

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const { username, password } = req.body
    if (username && password) {
      const userData = await User.create({
        username,
        password
      })
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.log_in = true;
        res.status(200).json("Successful")
      })
    } else {
      res.status(400).json({ message: "Error" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error" })
  }
})









//delete user







module.exports = router;