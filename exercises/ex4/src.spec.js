var getUsersInTheirThirties = require('./src'),
    catalog = require('../catalog'),
    registerMatchers = require('../../test-utils/register-matchers'),
    R = require('ramda');


describe('getUsersInTheirThirties', function() {
  registerMatchers();
  it('should return a list of two items', function() {
    expect(getUsersInTheirThirties(catalog)).toHaveLength(2);
  });
  it('should return users', function() {
    var users = getUsersInTheirThirties(catalog);
    expect(users).toAllBeObjects();
    expect(users).toBeSubsetOf(catalog.users);
  });
  it('should return the two users in their thirties', function() {
    expect(getUsersInTheirThirties(catalog)).toHaveSameItemsAs([
      {id: 3, name: "Thad", age: 36},
      {id: 1, name: "Nona", age: 33}
    ]);
  });
});
