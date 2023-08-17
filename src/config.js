const { Pool } = require("pg");
require("dotenv").config();

const Config = {
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  token: process.env.TOKEN_SECRET,
};

const pool = new Pool(Config);

module.exports = { pool };
