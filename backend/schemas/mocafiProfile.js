const mongoose = require('mongoose');

const mocafiProfileSchema = mongoose.Schema({
  user: {type:{
    firstName:{type:String},
    lastName:{type:String},
    phone:{type:String}
  }},
  account: {type:{
    cardNumber:{type:String},
    expiration:{type:String},
    pin:{type:String},
    balance:{type:Number}
  }}
})

module.exports = mongoose.model( 'mocafiProfile' , mocafiProfileSchema );
