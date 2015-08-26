'use strict';

var R = require('ramda');

var hasAgeDivisibleBy = R.curry(function(divisor, user) {
  return user && user.age && R.is(Number, user.age) && user.age % divisor === 0;
});

var hasEvenAge = hasAgeDivisibleBy(2);
var allHaveEvenAge = R.all(hasEvenAge);

var allHaveEvenAgeMessage = function(actual, pass) {
  var expected = pass ? "odd" : "even";
  var pred = pass ? hasEvenAge : R.complement(hasEvenAge);
  var firstWithout = R.find(pred, actual);
  return "Expected " +
    JSON.stringify(actual) +
    " to all have " +
    expected +
    " ages, but " +
    JSON.stringify(firstWithout) +
    " had age " + firstWithout.age;
};

var allHaveEvenAgeComparison = function(actual) {
  var pass = allHaveEvenAge(actual);
  var message = allHaveEvenAgeMessage(actual, pass);
  return {
    pass: pass,
    message: message
  };
};

var toAllHaveEvenAge = function(util, customEqualityTester) {
  return {
    compare: allHaveEvenAgeComparison
  };
};

module.exports = {
  toAllHaveEvenAge: toAllHaveEvenAge
};
