var sortCatalogUsersById = require('./src');
var catalog = require('../catalog');

describe("sortCatalogUsersById", function() {
  it("should return a list of users in order of increasing id", function() {
    var actual = sortCatalogUsersById(catalog);
    expect(actual).toEqual([
      {id: 0, name: "Jerold", age: 52},
      {id: 1, name: "Nona", age: 33},
      {id: 2, name: "Justine", age: 29},
      {id: 3, name: "Thad", age: 36},
      {id: 4, name: "Katie", age: 26},
      {id: 5, name: "Lucian", age: 23}
    ]);
  });
});
