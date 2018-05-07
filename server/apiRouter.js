const router = require('express').Router();
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = require('./dbConnection');
const config = require('../db/config');

router.get('/users/', (req, res) => {
  let pageSize = req.query.page_size || 10;
  let whereClause = ``;

  if (Object.keys(req.query).length > 0) {
    let clauses = [];

    if (req.query.page && req.query.page > 0) {
      clauses.push(`User.id > ${(req.query.page - 1) * pageSize} `);
    }

    if (req.query.query) {
      let keyword = req.query.query;
      let properties = ['id', 'first_name', 'last_name', 'email', 'ip_address'];
      clauses.push(`( ${properties
        .map(property => `User.${property} LIKE '%${keyword}%'`)
        .concat(`User.gender LIKE '${keyword}%'`)
        .join(' OR ') } ) `);
    }

    whereClause = `WHERE ${clauses.join('AND ')}`
  }

  console.log(`SELECT * FROM User ${whereClause}LIMIT ${pageSize}`);

  db.all(`SELECT * FROM User ${whereClause}LIMIT ${pageSize}`, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).json({message: 'Error', data: []})
    }

    if (data && data.length === 0) {
      res.status(404).send({ message: 'null', data: []});
    } else {
      res.status(200).send({ data });   
    }
  });
});

module.exports = router;