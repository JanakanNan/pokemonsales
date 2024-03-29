'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the item'
  },
  prix: {
    type: Number,
    required: 'Kindly enter the number of the item'
  },
  photo: {
    type: String,
    required: 'Kindly enter the path of the photo'
  },
  information: {
    type: String,
    required: 'Kindly enter the item info'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('users', UserSchema);
