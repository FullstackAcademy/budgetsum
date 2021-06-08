const router = require("express").Router();
const { User } = require("../db/models");

// GET /api/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) return res.sendStatus(404);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/setIncome", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.session.userId);
    user.income = req.body.income;
    console.log('body', req.body.income)
    //saves the new data in the db
    await user.save();
    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.post("/setSavings", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.session.userId);
    user.savings = req.body.savings;
    console.log('savings body', req.body.savings)
    //saves the new data in the db
    await user.save();
    res.send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
