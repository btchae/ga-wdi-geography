// REQUIREMENTS
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	db = process.env.MONGODB_URI || "mongodb://localhost/mansion",
	methodOverride = require('method-override'),
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// DATABASE
mongoose.connect(db);

// CONTROLLERS
var countryController = require('./controllers/countries.js');
app.use('/countries', countryController);


// LISTEN
app.listen(port);
console.log('=============================');
console.log('Server running off PORT: ' + port);
console.log('=============================');