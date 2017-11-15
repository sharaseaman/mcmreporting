var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

//get for all case data
router.get('/', function (req, res) {
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

router.get('/join_tables_reports', function (req, res) {
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

//post for custom tables
router.post('/custom', function (req, res) {
  var custom = req.body
  console.log('In Get for custom info', custom, custom.state);
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
        var queryArray = []
        var valueArray = []
        var tempArray = []
        var count = 0
        if (custom.start_case_type !== undefined) {
          var start_case_type$ = 'start_case_type = $'
          tempArray.push(start_case_type$);
          valueArray.push(custom.start_case_type);
        }
        if (custom.state !== undefined) {
          var state$ = 'state = $'
          tempArray.push(state$)
          valueArray.push(custom.state)
          console.log('in if statement', custom.state, tempArray, valueArray)
        }
        if (custom.county_name !== undefined) {
          var county_name$ = '(SELECT id FROM counties WHERE county = $'
          tempArray.push(county_name$);
          valueArray.push(custom.county_name);
        }
        if (custom.school_name !== undefined) {
          var school_name$ = '(SELECT id FROM schools WHERE school = $'
          tempArray.push(school_name$);
          valueArray.push(custom.school_name);
        }
        if (custom.age !== undefined) {
          var age$ = ' age = $'
          tempArray.push(age$);
          valueArray.push(custom.age);
        }
        if (custom.gender !== undefined) {
          var gender$ = ' gender = $'
          tempArray.push(gender$);
          valueArray.push(custom.gender);
        }
        if (custom.referral_type !== undefined) {
          var referral_type$ = ' referral_type = $'
          tempArray.push(referral_type$);
          valueArray.push(custom.referral_type);
        } // end list of queries
        // console.log('after if statement', state, tempArray)
        console.log('valueArray', valueArray)
        console.log('tmpArray', tempArray)
        tempArray.forEach(function (currentValue, index, array) {
          console.log('line 113, currentValue', currentValue)
          if (currentValue === '(SELECT id FROM counties WHERE county = $') {
            count++
            queryArray.push(currentValue + count + ')')
            console.log('this is the if statement')
          } 
          if (currentValue === '(SELECT id FROM schools WHERE school = $') {
              count++
              queryArray.push(currentValue + count + ')')
              console.log('this is the second if statement')
          } else {
            count++
            queryArray.push(currentValue + count)
            console.log('this is the else statement')
          } //end else 
        }) //end tempArray.forEach
          var query = queryArray.join(' AND ');
          console.log('query', query);
          var sqlQuery = 'SELECT * FROM case_data WHERE ' + query        
          console.log('in SQL', sqlQuery)
          console.log('in SQL values', valueArray)
        
          client.query(sqlQuery, valueArray, function (queryErr, resultObj) {
            done();
            console.log('resultObj', resultObj)
            if (queryErr) {
              res.sendStatus(500);
            } else {
              res.send(resultObj.rows);
            } //if/else
          }) //client query
       
      } //end pool else
    }) //end pool.connect
  } else {
    console.log('not logged in');
    res.send(false);//end if pool
  } //end get custom charts - pairs w 59
})

module.exports = router;


