const router = require("express").Router();
const User = require('../db/models/user')


router.get('/me', async (req, res, next) => {
  try{
    if(!req.session.userId){
      if(req.user){
        res.json(req.user)
      } else {
        res.sendStatus(401)
      }
    } else {
      const user = await User.findByPk(req.session.userId)
      if(!user){
        res.sendStatus(401)
      } else {
        res.json(user)
      }
    }
  }catch(err){
    next(err)
  }

});

router.put("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    console.log('user--->', user)
    if (user) {
      req.session.userId = user.id;
      res.json(user);
    } else {
      res.status(401).send('Wrong username and/or password')
    }
  } catch (err) {
    next(err);
  }
});


module.exports = router;
