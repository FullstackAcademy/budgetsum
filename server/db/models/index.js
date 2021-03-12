const User = require('./user');
const Category = require('./category');
const User_Category = require('./user_category');
const Price = require('./price');
const { UsageState } = require('webpack');
//User.hasMany(....)

User.belongsToMany(Category, {through: User_Category})
Category.belongsToMany(User, {through: User_Category})

//User_Category.hasMany(Price)
Price.belongsTo(User_Category)

module.exports = {
  User,
  Category,
  User_Category,
  Price
}
