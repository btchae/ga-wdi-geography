// REQUIREMENTSame
var mongoose = require('mongoose');
var Countries = require('./countries.js');


///Schema
var countrySchema = new mongoose.Schema({
  username: String,
  countries: String
});

// Map it through Mongoose
var Country = mongoose.model('Country', countrySchema);

module.exports = Country;