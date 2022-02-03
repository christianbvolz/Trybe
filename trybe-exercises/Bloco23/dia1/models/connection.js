const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'cb9090007',
  database: 'b23d1',
});

module.exports = connection;
