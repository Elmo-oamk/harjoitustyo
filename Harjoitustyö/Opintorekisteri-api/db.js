const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',          // vaihda tarvittaessa
  password: '123456',  // vaihda tarvittaessa
  database: 'Opintorekisteri'
});

module.exports = pool.promise();
