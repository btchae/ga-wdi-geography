/////Requirements
var express = require('express');
var router = express.Router();
var Countries = require('../models/countries.js');
var request = require('request');
var util = require('util');
var reponse_data;

/////Index
router.get('/', function(req,res){
	console.log('testing index');
	request('http://api.geonames.org/searchJSON?q='+ 'japan' +'&maxRows=1&username=geoproject', function(error,response,body) {
if (!error && response.statusCode == 200) {
	  	console.log('API data below...');
	  	console.log(body);
	    response_data = body;
	    	// res.json(response_data);
	  }
	  res.json(response_data);
	})
	// res.json(response_data);
	// res.send('index workin!')
	// console.log(response_data);
	// res.send(response_data);
})

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