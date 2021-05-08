const User = require('./user');
const Category = require('./category');
const User_Category = require('./user_category');

User.belongsToMany(Category, {through: User_Category})
Category.belongsToMany(User, {through: User_Category})

module.exports = {
  User,
  Category,
  User_Category,
}
