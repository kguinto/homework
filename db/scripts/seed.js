const sqlite3 = require('sqlite3').verbose();
const data = require('../data/MOCK_DATA.json');
const config = require('../config');
const path = require('path');

console.log(`Creating ${config.database} if not exists...`);

const db = new sqlite3.Database(
  path.resolve(__dirname, `../${config.database}.db`), 
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, 
  (err) => {
    if (err) console.log(err.message);
});

db.serialize(function() {
  console.log('Creating User table if not exists...');

  db.run(`
    CREATE TABLE IF NOT EXISTS User(
      id  INT   PRIMARY KEY   NOT NULL,
      first_name  TEXT        NOT NULL,
      last_name   TEXT        NOT NULL,
      email       TEXT        NOT NULL,
      gender      TEXT        NOT NULL,
      ip_address  TEXT        NOT NULL
    );
  `);

  console.log('Seeding db...');

  data.forEach((user) => {
    const statement = `
      INSERT INTO User VALUES (
        ${user.id}, 
        '${user.first_name}',
        '${user.last_name}', 
        '${user.email}', 
        '${user.gender}',
        '${user.ip_address}'
      );
    `
    db.exec(statement, (err) => {
      if (err) {
        console.error(err);
        process.exit();
      }
    });
  });
  console.log('Seed successful.');
});

db.close();
