/////Requirements
var express = require('express');
var router = express.Router();
var Country = require('../models/countries.js');
var request = require('request');

// /////Index
// router.get('/', function(req,res){
// 	console.log('testing index');
// 	var reponse_data;
// 	request('http://api.geonames.org/searchJSON?q='+ 'japan' +'&maxRows=1&username=geoproject', function(error,response,body) {
// if (!error && response.statusCode == 200) {
// 	  	console.log('API data below...');
// 	  	console.log(body);
// 	    response_data = body;
// 	    JSON.parse(response_data);
// 	    console.log(typeof JSON.parse(response_data));
// 	    	// res.json(response_data);
// 	  }
// 	  res.render('index.ejs', JSON.parse(response_data));
// 	})
// 	// res.json(response_data);
// 	// res.send('index workin!')
// 	// console.log(response_data);
// 	// res.send(response_data);
// });

//////Index
router.get('/', function(req,res){
	console.log('testing index');
	Country.find(function(err,user){
		console.log('user');
		res.render('index.ejs', {user});
	})
});

///New
router.get('/new', function(req,res){
	console.log('testing new');
	res.render('new.ejs');
});

////User page/MoreShow
router.get('/:id/info', function(req,res) {
	console.log('testing moreshow');
	Country.findById(req.params.id, function(err,user) {
		console.log(user);
  	request('http://api.geonames.org/searchJSON?q='+ user.countries +'&maxRows=1&username=geoproject', function(error,response,body) {
if (!error && response.statusCode == 200) {
	  	console.log('API data below...');
	  	console.log(body);
	    response_data = body;
	    JSON.parse(response_data);
	    console.log(typeof JSON.parse(response_data));
	    console.log(JSON.parse(response_data).geonames[0].countryCode);
	    var country = new Country(req.body);
	    	// res.json(response_data);
	  }
	  console.log(req.params);
	  Country.findOneAndUpdate( { "_id" : req.params.id}, req.body, function(err,user){
	  	console.log('life');
	  	console.log(req.body);
	  })
	    console.log(JSON.parse(response_data).geonames[0].countryCode);
	    // Country.set('countrycode', JSON.parse(response_data).geonames[0].countryCode);
	  res.render('moreshow.ejs', JSON.parse(response_data));

	});		
    	// res.render('show.ejs', {user});
});
});

///Country Page/FirstShow
router.get('/:id', function(req,res){
	console.log('testing show');
	Country.findById(req.params.id, function(err,user) {
		console.log(user);
    	res.render('show.ejs', {user});
})
});

////Edit
router.get('/:id/edit', function(req,res) {
	console.log('testing edit');
	Country.findById(req.params.id, function(err,user) {
    	res.render('edit.ejs', {user});
});
});

///Update
router.put('/:id', function(req,res) {
	console.log(req.params.id);
	console.log('testing put');
	Country.findOneAndUpdate( { "_id" : req.params.id}, req.body, function(err, user) {
	    res.redirect('/countries/'+req.params.id);
	  });
});

///Create user
router.post('/', function(req,res){
	console.log('testing post');
	var hey = new Country({
		username: req.body.username,
		countries: req.body.country
	})
	hey.save(function(err,data){
		if (err) {
			throw err;
		} else {
			res.redirect('/countries');
		}
	})
});

////Delete User
router.delete('/:id', function(req, res){
  console.log('deleting');
  console.log(req.params.id);
Country.findOneAndRemove({'_id' : req.params.id}, function(err) {
  	if (err) {
  		console.log(err);
  	} else {
  		console.log(req.params.id);
  		res.redirect('/countries/');
  	}
  });
  });
// router.post('/:id', function(req, res){
//   console.log('------------------------------------');
//   console.log(req.body.country);
//   // http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&country=KR&username=geoproject&style=full
//   	request('http://api.geonames.org/searchJSON?q='+ req.body.country +'&maxRows=1&username=geoproject', function(error,response,body) {
// if (!error && response.statusCode == 200) {
// 	  	console.log('API data below...');
// 	  	console.log(body);
// 	    response_data = body;
// 	    JSON.parse(response_data);
// 	    console.log(typeof JSON.parse(response_data));
// 	    console.log(JSON.parse(response_data).geonames[0].countryCode);
// 	    var country = new Country(req.body);
// 	    	// res.json(response_data);
// 	  }
// 	    console.log(JSON.parse(response_data).geonames[0].countryCode);
// 	  res.render('show.ejs', JSON.parse(response_data));

// 	});
// 	});


////Create
// router.post('/', function(req, res) {
// 	console.log(req.body);
// 	var user = new User(req.body);
// 	user.save(function(err) {
// 		if(err) {
// 			console.log(err);
// 		} else {
// 			console.log('New instance saved');
// 			res.send(user)
// 		}
// 	});
// });

// router.get('/', function(req, res) {
// 	var response_data;
// 	request('http://swapi.co/api/planets/1', function (error, response, body) {
// 	  if (!error && response.statusCode == 200) {
// 	  	console.log('API data below...');
// 	  	console.log(body);
// 	    response_data = body;
// 	  }
// 	});
// 	console.log(response_data);
// 	res.json(response_data);
// });

// http://api.geonames.org/searchJSON?q=japan&maxRows=1&username=geoproject
// var numbers = [];

// for (i = 1; i <= 1686; i++) {
// 	numbers.push(i);
// }
// console.log(numbers)

// function(req,res)
// for (i = 1; i <= 1686; i++) {
// 	'http://xkcd.com/'+i+'/info.0.json';
// }

// var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,]

module.exports = router;