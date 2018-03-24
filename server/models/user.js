
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
    npi:String,
    location:String,
    add1:String,
    add2:String,
    city:String,
    pincode:String,
    state:String,
    coutry:String

});

module.exports = mongoose.model('user', userSchema, 'appointUsers');