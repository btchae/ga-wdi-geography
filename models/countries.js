// REQUIREMENTSame
var mongoose = require('mongoose');
var Countries = require('./countries.js');


///Schema
var countrySchema = new mongoose.Schema({
  username: String,
  countries: Array
});

// Map it through Mongoose
var Country = mongoose.model('Country', countrySchema);

module.exports = Country;