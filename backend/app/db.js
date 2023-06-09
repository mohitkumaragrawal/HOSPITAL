const mysql = require("mysql2");
const util = require("util");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error(err);
    throw err;
  } else console.log("Connected to database");
  if (connection) connection.release();
  return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;
