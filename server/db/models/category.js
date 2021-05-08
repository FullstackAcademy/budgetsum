const Sequelize = require("sequelize");
const db = require("../db");

const Category = db.define("category", {
  name: Sequelize.STRING,
  isDefault: Sequelize.BOOLEAN
});

module.exports = Category;
