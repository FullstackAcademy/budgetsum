const Sequelize = require("sequelize");
const db = require("../db");


const User_Category = db.define('user_category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  selfGranted: Sequelize.BOOLEAN
}, { timestamps: false });


module.exports = User_Category;
