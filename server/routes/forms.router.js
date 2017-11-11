var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

router.get('/cities', function(req, res) {
    console.log('In cities Get for intake');
    // check if logged in
    if (req.isAuthenticated()) {
      pool.connect(function (conErr, client, done) {
        if (conErr) {
          res.sendStatus(500);
        } else {
          client.query('SELECT * FROM cities', function (queryErr, resultObj) {
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
  });//end cities Get call

  router.get('/counties', function(req, res) {
    console.log('In counties Get for intake');
    // check if logged in
    if (req.isAuthenticated()) {
      pool.connect(function (conErr, client, done) {
        if (conErr) {
          res.sendStatus(500);
        } else {
          client.query('SELECT * FROM counties', function (queryErr, resultObj) {
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
  }); //end counties get call

  router.get('/lawEnforcement', function(req, res) {
    console.log('In lawEnforcement Get for intake');
    // check if logged in
    if (req.isAuthenticated()) {
      pool.connect(function (conErr, client, done) {
        if (conErr) {
          res.sendStatus(500);
        } else {
          client.query('SELECT * FROM law_enforcement', function (queryErr, resultObj) {
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
  });// end law enforcement Get call

  router.get('/schools', function(req, res) {
    console.log('In schools Get for intake');
    // check if logged in
    if (req.isAuthenticated()) {
      pool.connect(function (conErr, client, done) {
        if (conErr) {
          res.sendStatus(500);
        } else {
          client.query('SELECT * FROM schools', function (queryErr, resultObj) {
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
  }); //end schools get call

  router.post('/newIntake', function(req, res) {
    var newIntake = req.body;
    console.log('In Post for new intake', newIntake);
    // check if logged in
    if (req.isAuthenticated()) {
      pool.connect(function (conErr, client, done) {
        if (conErr) {
          res.sendStatus(500);
        } else {
          var sqlQuery = 'INSERT INTO case_data (intake_date, age, gender, last_seen, reported_missing, people_served, city, county, state, school, start_case_type, referral_type, mcm_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)'
          var valueArray = [newIntake.intake_date, newIntake.age, newIntake.gender, newIntake.last_seen, newIntake.reported_missing, newIntake.people_served, newIntake.city, newIntake.county, newIntake.state, newIntake.school, newIntake.start_case_type, newIntake.referral_type, newIntake.MCM_case]
          client.query(sqlQuery, valueArray, function (queryErr, resultObj) {
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
  }); //end input Post

  router.get('/caseToEdit', function(req, res) {
    var mcmCase = req.body;
    console.log('In get for caseToEdit', mcmCase);
    // check if logged in
    if (req.isAuthenticated()) {
      pool.connect(function (conErr, client, done) {
        if (conErr) {
          res.sendStatus(500);
        } else {
          client.query('SELECT * FROM case_data where mcm_number = mcmCase', function (queryErr, resultObj) {
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
  }); //end schools get call

  //the  next get relates to getting information from join tables. I may need to add a second get that a client side
  //loop will send queries through after it receives an array of ids from the initial get call.

  router.get('/caseLawEnforcement', function(req, res) {
    var mcmCase = req.body;
    console.log('In get for caseLawEnforcement', mcmCase);
    // check if logged in
    if (req.isAuthenticated()) {
      pool.connect(function (conErr, client, done) {
        if (conErr) {
          res.sendStatus(500);
        } else {
          client.query('SELECT * FROM case_lawenforcement_denial where case_data_id = (SELECT (id) FROM case_data WHERE mcm_number = mcmCase)', function (queryErr, resultObj) {
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
  }); //end law enforcement per case call



  router.put('/editIntake', function(req, res) {
    var edit = req.body;
    console.log('In put for edit intake', edit);
    // check if logged in
    if (req.isAuthenticated()) {
      pool.connect(function (conErr, client, done) {
        if (conErr) {
          res.sendStatus(500);
        } else {
          var sqlQuery = 'INSERT INTO case_data (intake_date, age, gender, last_seen, reported_missing, people_served, city, county, state, school, start_case_type, referral_type, mcm_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)'
          var valueArray = [newIntake.intake_date, newIntake.age, newIntake.gender, newIntake.last_seen, newIntake.reported_missing, newIntake.people_served, newIntake.city, newIntake.county, newIntake.state, newIntake.school, newIntake.start_case_type, newIntake.referral_type, newIntake.MCM_case]
          client.query(sqlQuery, valueArray, function (queryErr, resultObj) {
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
  }); //end schools get call
module.exports = router;
