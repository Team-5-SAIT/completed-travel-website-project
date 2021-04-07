var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
const Customer = require('../models/customer');
var router = express.Router();


// display register page
router.get('/', function(req, res) {
    res.render('reg', { user : req.user });
  });
  
  
  
  //customer registration
  router.post("/", function (req, res, next) {
    console.log(req.body);
    const myCustomer = new Customer(req.body);
    myCustomer.save(function (err, r) {
      if (err) return next(err);
      res.render("reg", { user : req.user, title1: "Registration successful"},);
    });
  });


module.exports = router;