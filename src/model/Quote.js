const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const quoteSchema = new mongoose.Schema({
  quoteText: {
    type: String,
    trim: true,
    required: 'Please enter a quote',
    unique: true
  },
  quoteAuthor: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Quote', quoteSchema);
