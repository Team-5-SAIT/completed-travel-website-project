var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Customer = new Schema({
    fname: String,
    lname: String,
    address: String,
    city: String,
    province: String,
    pcode: String,
    phone: String,
    email: String,
});

Customer.plugin(passportLocalMongoose);

module.exports = mongoose.model('Customer', Customer);