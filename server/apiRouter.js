const router = require('express').Router();
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = require('./dbConnection');
const config = require('../db/config');

router.get('/users/', (req, res) => {
  db.all(`SELECT * FROM User LIMIT 10`, (err, data) => {
    if (err) {
      res.status(400).json({message: 'Error'})
    }

    res.status(200).send(data);   
  });
});

module.exports = router;