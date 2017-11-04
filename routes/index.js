var express = require('express');
var passport = require('passport');
var path = require('path');
var router = express.Router();

router.post('/',
  passport.authenticate('local', {
    successRedirect: '/views/users.html',
    failureRedirect: '/views/failure.html'
  })
);

router.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

module.exports = router;