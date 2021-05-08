const router = require('express').Router();
const { User, Category } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) return res.sendStatus(404);

    const defaultCategories = await Category.findAll();
    const userCategories = await user.getCategories();

    defaultCategories.forEach(cat => {
      if (!userCategories.find(userCat => userCat.id === cat.id)) {
        userCategories.push(cat)
      }
    })

    res.send(userCategories);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    await user.addCategories(req.body.categories);

    res.send(req.body.categories)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
