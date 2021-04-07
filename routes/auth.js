var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
const Customer = require('../models/customer');
var router = express.Router();


// check if admin is logged in
router.use(function (req, res, next) {
    if (!req.user)
      res.redirect("/login");
    else
      next();
  });
  
  
  //display customers & admin db if admin is logged in
  router.get('/', function(req, res) {
    Customer.find(function (err, customers) {
      if (err) return console.error(err);
      Account.find(function (err, accounts) {
        if (err) return console.error(err);
        res.render("auth", { title: req.user.username, customers, accounts  } );
    });
    
     
    });
  });



module.exports = router;