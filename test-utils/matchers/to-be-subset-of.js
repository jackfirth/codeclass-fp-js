'use strict';

var R = require('ramda');

var isSubsetOf = R.curry(function(allowed, vs) {
  var inAllowed = R.flip(R.contains)(allowed);
  return R.all(inAllowed, vs);
});

var isSubsetOfMessage = function(actual, expected, pass) {
  var invert = pass ? "not be a subset of " : "be a subset of ";
  var firstNotIn = R.find(R.complement(R.flip(R.contains)(expected)));
  return "Expected " +
    JSON.stringify(actual) +
    " to " +
    invert +
    JSON.stringify(expected) +
    ", but " +
    JSON.stringify(firstNotIn(actual)) +
    " was not a member";
};

var isSubsetOfComparison = function(actual, expected) {
  var pass = isSubsetOf(expected, actual);
  var message = isSubsetOfMessage(actual, expected, pass);
  return {
    pass: pass,
    message: message
  };
};

var toBeSubsetOf = function(util, customEqualityTester) {
  return {
    compare: isSubsetOfComparison
  };
};

module.exports = {
  toBeSubsetOf: toBeSubsetOf
};
