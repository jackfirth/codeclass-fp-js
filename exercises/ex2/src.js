var catalog = require('../catalog');
var R = require('ramda');

var isEven = function(x) { return x % 2 === 0 };


var hasEvenAge = R.propSatisfies(isEven, "age");

var getUsersWithEvenAge;

module.exports = getUsersWithEvenAge
