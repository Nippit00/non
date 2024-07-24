const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,          // Should be 'db_depa'
  user: process.env.DB_USER,          // Should be 'MYSQL_USER'
  password: process.env.DB_PASSWORD,  // Should be 'MYSQL_PASSWORD'
  database: process.env.DB_DATABASE   // Should be 'EvaluationSheet'
});

const promisePool = pool.promise();

module.exports = promisePool;
