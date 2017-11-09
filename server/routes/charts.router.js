var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
    console.log('In Charts Get for all case data');
    // check if logged in
    if (req.isAuthenticated()) {
      pool.connect(function (conErr, client, done) {
        if (conErr) {
          res.sendStatus(500);
        } else {
          client.query('SELECT * FROM case_data', function (queryErr, resultObj) {
            done();
            if (queryErr) {
              res.sendStatus(500);
            } else {
              res.send(resultObj.rows);
            }
          });
        }
      })
    } else {
      // failure best handled on the server. do redirect here.
      console.log('not logged in');
      // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
      res.send(false);
    }
  });
module.exports = router;
