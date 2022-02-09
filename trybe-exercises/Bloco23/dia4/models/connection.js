const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'cb9090007',
  database: 'model_example'});

module.exports = connection;