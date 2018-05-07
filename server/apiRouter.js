const router = require('express').Router();
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = require('./dbConnection');
const config = require('../db/config');

router.get('/users/', (req, res) => {
  let whereClause = ``;

  if (req.query.page && req.query.page > 0) {
    whereClause = `WHERE User.id > ${(req.query.page - 1) * 10} `;
  }

  db.all(`SELECT * FROM User ${whereClause}LIMIT 10`, (err, data) => {
    if (err) {
      res.status(400).json({message: 'Error'})
    }

    if (data.length === 0) {
      res.status(404).send('null');
    } else {
      res.status(200).send(data);   
    }
  });
});

module.exports = router;