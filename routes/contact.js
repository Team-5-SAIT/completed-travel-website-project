var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
const Customer = require('../models/customer');
var router = express.Router();


//display contact page
router.get('/', function (req, res) {
    res.render('contact', { user : req.user });
  });


module.exports = router;