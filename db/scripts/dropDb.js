const path = require('path');
const config = require('../config');
const fs = require('fs');

const dbPath = path.resolve(__dirname, '../', `${config.database}.db`);

console.log(`Deleting ${dbPath}...`);
fs.unlink(dbPath, (err) => {
  if (err) {
    console.error('Could not delete database, make sure it exists.');
    console.error(err);
    process.exit();
  }
  console.log('Deletion successful.');
});
