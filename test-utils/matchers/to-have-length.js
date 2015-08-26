'use strict';

var R = require('ramda');

var hasLength = R.curry(function(n, vs) {
  return vs.length === n;
});

var haveLengthMessage = function(actual, expected, pass) {
  var invert = pass ? "not have" : "have";
  return "Expected " +
    JSON.stringify(actual) +
    " to " +
    invert +
    " length " +
    expected +
    ", but had length " +
    actual.length;
};

var haveLengthComparison = function(actual, expected) {
  var pass = hasLength(expected, actual);
  var message = haveLengthMessage(actual, expected, pass);
  return {
    pass: pass,
    message: message
  };
};

var toHaveLength = function(util, customEqualityTester) {
  return {
    compare: haveLengthComparison
  };
};

module.exports = {
  toHaveLength: toHaveLength
};
