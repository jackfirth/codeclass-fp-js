var getUsersWithEvenAge = require('./src'),
    catalog = require('../catalog'),
    registerMatchers = require('../../test-utils/register-matchers'),
    R = require('ramda');


describe('getUsersWithEvenAge', function() {
  registerMatchers();
  it('should return a list of users with only even ages', function() {
    expect(getUsersWithEvenAge(catalog)).toAllHaveEvenAge();
  });
  it('should return exactly three users', function() {
    expect(getUsersWithEvenAge(catalog)).toHaveLength(3);
  })
});
