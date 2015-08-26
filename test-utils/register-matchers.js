var customMatchers = require('./matchers/all');

module.exports = function() {
  beforeEach(function() {
    jasmine.addMatchers(customMatchers);
  });
};
