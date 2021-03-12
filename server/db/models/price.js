const Sequelize = require("sequelize");
const db = require("../db");

const Price = db.define("price", {
  amount: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Price;
