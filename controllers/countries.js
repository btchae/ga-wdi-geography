var express = require('express');
var router = express.Router();
var Avatars = require('../models/avatars.js');
var Rooms = require('../models/rooms.js');
var request = require('request');
var util = require('util');
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