var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

//get all users back so that they can be edited -shara
router.get('/', function(req, res) {
    console.log('In Manage Router');
    if (req.isAuthenticated()) {
      pool.connect(function (conErr, client, done) {
        if (conErr) {
          res.sendStatus(500);
        } else {
          client.query('SELECT username,admin FROM users', function (queryErr, resultObj) {
            done();
            if (queryErr) {
              res.sendStatus(500);
            } else {
              res.send(resultObj.rows);
              console.log('this is resultObj.rows in manage get', resultObj.rows);
            }
          });
        }
      })
    } else {
      console.log('not logged in');
      res.send(false);
    }
  });
module.exports = router;
