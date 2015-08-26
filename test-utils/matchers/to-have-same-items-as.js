'use strict';

var R = require('ramda');

var hasSameItemsAs = R.curry(function(expectedItems, vs) {
  return expectedItems.length === vs.length
    && R.difference(expectedItems, vs).length === 0;
});

var hasSameItemsAsMessage = function(actual, expected, pass) {
  var invert = pass ? "not have" : "have";
  return "Expected " +
    JSON.stringify(actual) +
    " to " +
    invert +
    " the same items as " +
    JSON.stringify(expected);
};

var hasSameItemsAsComparison = function(actual, expected) {
  var pass = hasSameItemsAs(expected, actual);
  var message = hasSameItemsAsMessage(actual, expected, pass);
  return {
    pass: pass,
    message: message
  };
};

var toHaveSameItemsAs = function(util, customEqualityTester) {
  return {
    compare: hasSameItemsAsComparison
  };
};

module.exports = {
  toHaveSameItemsAs: toHaveSameItemsAs
};
