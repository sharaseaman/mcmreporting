var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

//get all users back so that they can be edited -shara
router.get('/', function (req, res) {
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

//update admin rights
router.put('/', function (req, res) {
  if (req.isAuthenticated()) {
    pool.connect(function (connectionError, client, done) {
      console.log('req.body ->', req.body);
      console.log('this is req.body.username', req.body.username);
      console.log('this is req.body.username', req.body.admin);
      var userNameEdit = req.body.username;
      var userAdminEdit = req.body.admin
      if (connectionError) {
        console.log(connectionError);
        res.sendStatus(501);
      } else {
        var pQuery = 'UPDATE users SET admin=$1 WHERE username=$2';
        var valueArray = [userAdminEdit, userNameEdit];

        client.query(pQuery, valueArray, function (queryError, resultObj) {
          done();
        })
      }
    });
  } else {
    console.log('not logged in');
    res.send(false);
  }
});

module.exports = router;