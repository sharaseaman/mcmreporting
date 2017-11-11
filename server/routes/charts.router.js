var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

//get for all case data
router.get('/', function(req, res) {
    console.log('In Charts Get for all case data');
    // check if logged in
    if (req.isAuthenticated()) {
      pool.connect(function (conErr, client, done) {
        if (conErr) {
          res.sendStatus(500);
        } else {
          client.query('SELECT * FROM case_data JOIN counties ON case_data.county = counties.id JOIN cities ON case_data.city = cities.id JOIN schools ON case_data.school = schools.id', function (queryErr, resultObj) {
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

// Handles Ajax request for user information if user is authenticated
router.get('/join_tables_reports', function(req, res) {
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
        client.query('SELECT * FROM case_data FULL JOIN case_vulnerabilities ON case_data.id = case_vulnerabilities.case_data_id FULL JOIN vulnerabilities ON case_vulnerabilities.vulnerabilities_id = vulnerabilities.id FULL JOIN case_lawenforcement_denial ON case_data.id = case_lawenforcement_denial.case_data_id FULL JOIN law_enforcement ON case_lawenforcement_denial.law_enforcement_id = law_enforcement.id FULL JOIN case_race_ethnicity ON case_data.id = case_race_ethnicity.case_data_id FULL JOIN race_ethnicity ON case_race_ethnicity.race_ethnicity_id = race_ethnicity.id', function (queryErr, resultObj) {
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
