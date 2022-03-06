
const express = require('express');
const mongoose = require('mongoose');
const mocafiProfile = require('./schemas/mocafiProfile');
const app = express();

mongoose.connect('mongodb+srv://admin:dfFoRhDmU18dOGNb@cluster0.gzpoz.mongodb.net/mocafiDB?retryWrites=true&w=majority')
.then((res)=>{
  console.log('connected to mongo.');
})
.catch((err)=>{
  console.log('problem connecting to mongo.');
  console.log(err);
});

// CORS, just in case
app.use( ( req, res, next ) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token");
  res.setHeader("Access-Control-Allow-Methods","GET");
  next();
});

// API
app.get("/api/v1/rest/mocafiProfile/:cardNumber",( req,res ) => {

  mocafiProfile.findOne({'account.cardNumber':req.params.cardNumber}).then((result)=>{
    if(!result){ // if result is null then there are no records matching the cardNumber were found
      res.status(200).json({
        message: 'No Results Found'
      })
    } else {
      res.status(200).json({
        message: 'MoCoFi Profile Found',
        res:result
      })
    }
  });

});

module.exports = app;
