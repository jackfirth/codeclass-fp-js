'use strict';

var R = require('ramda');

var isString = R.is(String);
var allBeStrings = R.all(isString);

var allBeStringsMessage = function(actual, pass) {
  var expected = pass ? "not all be" : "all be";
  var pred = pass ? isString : R.complement(isString);
  var firstWithout = R.find(pred, actual);
  return "Expected " +
    JSON.stringify(actual) +
    " to " +
    expected +
    " strings, but " +
    JSON.stringify(firstWithout) +
    " had type " + typeof firstWithout;
};

var allBeStringsComparison = function(actual) {
  var pass = allBeStrings(actual);
  var message = allBeStringsMessage(actual, pass);
  return {
    pass: pass,
    message: message
  };
};

var toAllBeStrings = function(util, customEqualityTester) {
  return {
    compare: allBeStringsComparison
  };
};

module.exports = {
  toAllBeStrings: toAllBeStrings
};
