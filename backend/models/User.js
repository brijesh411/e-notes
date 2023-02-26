const mongoose = require('mongoose');

const UserSchema = new Schema({

name: {
    type: String,
    required: true   
},
email:{
    type: String,
    required: true,
    unique: true
},
 password:{
    type: String,
    required: true
 },
 date:{
    type: Date,
    default: Date.now
    // not to use Date.now() (called calling function) because 
    // Date.now() will give date and time of when command
    // got first time called while Date.now will give time
    // date everytime different and we want that here.

 },
  });

  module.exports = mongoose.model('user', UserSchema)
  