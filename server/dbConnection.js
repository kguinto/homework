const sqlite3 = require('sqlite3').verbose();
const config = require('../db/config');
const path = require('path');

const db = new sqlite3.Database(
  path.resolve(__dirname, '../db/', `${config.database}.db`), 
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, 
  (err) => {
    if (err) console.log(err.message);
});

module.exports = db;