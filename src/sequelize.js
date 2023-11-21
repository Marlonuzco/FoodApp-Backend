const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("FoodApp_Backend", "main", "747pipi747", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = { sequelize };
