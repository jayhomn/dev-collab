require("dotenv").config();
const { Sequelize } = require("sequelize");

const client = new Sequelize(process.env.DATABASE_URL, {
  logging: true,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = client;
