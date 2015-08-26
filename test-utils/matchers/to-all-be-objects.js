'use strict';

var R = require('ramda');

var isObject = R.is(Object);
var allBeObjects = R.all(isObject);

var allBeObjectsMessage = function(actual, pass) {
  var expected = pass ? "not all be" : "all be";
  var pred = pass ? isObject : R.complement(isObject);
  var firstWithout = R.find(pred, actual);
  return "Expected " +
    JSON.stringify(actual) +
    " to " +
    expected +
    " objects, but " +
    JSON.stringify(firstWithout) +
    " had type " + typeof firstWithout;
};

var allBeObjectsComparison = function(actual) {
  var pass = allBeObjects(actual);
  var message = allBeObjectsMessage(actual, pass);
  return {
    pass: pass,
    message: message
  };
};

var toAllBeObjects = function(util, customEqualityTester) {
  return {
    compare: allBeObjectsComparison
  };
};

module.exports = {
  toAllBeObjects: toAllBeObjects
};
