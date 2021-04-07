var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
const Customer = require('../models/customer');
var router = express.Router();



//display index page
router.get('/', function (req, res) {
  res.render('index', { user : req.user });
});





// admin login page display
router.get('/login', function(req, res) {
  res.render('login', { user : req.user });
});


//admin autentication
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});



//admin register
router.post('/register', function(req, res) {
  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
          return res.render('login', { account : account,  title2: "Not successful"});
      }

      passport.authenticate('local')(req, res, function () {
        res.render("login", { title2: "Registration successful"},);
      });
  });
});


// admin log out
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});



module.exports = router;