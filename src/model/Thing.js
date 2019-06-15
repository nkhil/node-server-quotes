const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const thingSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a thing name',
    unique: true
  },
  description: {
    type: String,
    trim: true,
    required: 'Please enter a thing description'
  }
});

module.exports = mongoose.model('Thing', thingSchema);
