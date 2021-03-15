const Sequelize = require('sequelize');


let config

if (process.env.DATABASE_URL) {
  config = {
    logging: false,
    ssl: true,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
} else {
  config = {
    logging: false
  }
}

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/budgetsum', config
)

module.exports = db;
