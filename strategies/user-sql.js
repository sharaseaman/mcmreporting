var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var pg = require('pg');

//require modules
var encryptLib = require('../modules/encryption');
var connection = require('../modules/connection');

//serialize user
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, passDone) {
  console.log('called deserializeUser');

  pg.connect(connection, function(err, client, pgDone) {
    //connection error
    if(err){
      console.log(err);
      res.sendStatus(500);
    }

    client.query("SELECT * FROM users WHERE id = $1", [id], function(err, results) {
      pgDone();

      if(results.rows.length >= 1){
        console.log(results.rows[0]);
        return passDone(null, results.rows[0]);
      }

      // handle errors
      if(err){
        console.log(err);
      }

    });
  });
});

//local strategy
passport.use('local', new LocalStrategy(
  {
    passReqToCallback: true,
    usernameField: 'username'
  },
  function(req, username, password, passDone) {
    console.log('hit local strategy');

    pg.connect(connection, function(err, client, pgDone) {

      //connection error
      if(err){
        console.log(err);
        res.sendStatus(500);
      }

      // find all users
      client.query('SELECT * from users WHERE username = $1', [username],
        function(err, result) {
          pgDone();

          //catch query error
          if(err){
            console.log(err);
            return passDone(null, false);

          }else{
            //check the length of the result set
            if(result.rows.length >= 1){

              var passwordDb = result.rows[0].password;
              //if given password matches dbs password

              // compare encrypted password with stored password
              if(encryptLib.comparePassword(password, passwordDb)){
                console.log('correct pass');
                return passDone(null, result.rows[0]);
              }
            }

            console.log('nope');
            // if fewer than 1 row or incorrect password - fail
            return passDone(null, false, {message: 'Incorrect credentials.'});
          }
      });
    });
  }
));

module.exports = passport;