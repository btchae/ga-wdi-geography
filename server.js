// REQUIREMENTS
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoUri = process.env.MONGOLAB_URI || "mongodb://localhost/countries",
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
mongoose.connect(mongoUri);

// CONTROLLERS
var countryController = require('./controllers/countries.js');
app.use('/countries', countryController);


// LISTEN
app.listen(port);
console.log('=============================');
console.log('Server running off PORT: ' + port);
console.log('=============================');



//Not Done
// Have at least 1 model with a schema backed by mongoose.
// Utilize full RESTful routes: Index, show, new, create, edit, update, delete
// Utlize an ORM to create a database and relevant structure
// Include wireframes that you designed during the planning process
// Have semantically clean HTML
// Utilize at least 1 "advanced" CSS technique (translate, transform, animation, etc)
// Be deployed on heroku to be accessible by the public!
// Include some form of responsive design


//Done
// Utilize at least 1 external api called from your server check