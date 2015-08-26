var getNamesOfThreeYoungestUsers = require('./src'),
    catalog = require('../catalog'),
    registerMatchers = require('../../test-utils/register-matchers'),
    R = require('ramda');


describe('getNamesOfThreeYoungestUsers', function() {
  registerMatchers();
  it('should return a list of three items', function() {
    expect(getNamesOfThreeYoungestUsers(catalog)).toHaveLength(3);
  });
  it('should return names of users', function() {
    var names = getNamesOfThreeYoungestUsers(catalog);
    expect(names).toAllBeStrings();
    expect(names).toBeSubsetOf(R.map(R.prop("name"), catalog.users));
  });
  it('should return the names of the youngest users', function() {
    expect(getNamesOfThreeYoungestUsers(catalog)).toHaveSameItemsAs([
      "Lucian",
      "Katie",
      "Justine"
    ]);
  });
});
