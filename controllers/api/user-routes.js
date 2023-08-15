const router = require("express").Router();
const { User } = require("../../models/");




//GET ALL USERS
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST SIGNUP - add user
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
    const { name, email, password } = req.body
    if (name && email && password) {
      const user = await User.findOne({
        where: {
          name: name,
          email: email
        }
      })

      if (!user) {
        res.status(404).json("Error")
        return
      }

      const isValidPw = user.checkPassword(password)

      if (!isValidPw) {
        res.status(404).json("Error")
        return
      }

      req.session.save(() => {
        req.session.user_id = user.id;
        req.session.logged_in = true;
        res.status(200).json("Successful")
      })

    } else {
      res.status(400).json({ message: "Error" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error" })
  }
})
//post logout
router.post('/logout', (req, res) => {
  // if (req.session.logged_in) {
  req.session.destroy(() => {
    res.status(204).end();
  });
  // } else {
  //   res.status(404).end();
  // }
});

//put update user

// router.post('/', async (req, res) => {
//   try {
//     console.log(req.body)
//     const { username, password } = req.body
//     if (username && password) {
//       const userData = await User.create({
//         username,
//         password
//       })
//       req.session.save(() => {
//         req.session.user_id = userData.id;
//         req.session.logged_in = true;
//         res.status(200).json("Successful")
//       })
//     } else {
//       res.status(400).json({ message: "Error" })
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error" })
//   }
// })









//delete user







module.exports = router;