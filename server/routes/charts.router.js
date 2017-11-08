var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

router.get('/', function(req, res) {
    console.log('In Charts Get for all case data');
    pool.connect(function(connectionError, client, done){
        if(connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM case_data', function(queryError, resultObj){
                done();
                if(queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    if(req.isAuthenticated()) {
                        // send back user object from database
                        console.log('logged in', req.user);
                        var userInfo = {
                          username : req.user.username,
                          admin: req.user.admin     //shara added 
                        }
                        console.log('all case data', resultObj.rows);
                        res.send(resultObj.rows);
                    } else {
                        // failure best handled on the server. do redirect here.
                        console.log('not logged in');
                        res.send(403);
                      } //end Authentication if/else
                    }//end else
                }) //end query
            } //end pool else
        }) // end pool function
    }); //end get games function

module.exports = router;
