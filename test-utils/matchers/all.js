var mergeAll = require('ramda').mergeAll;


module.exports = mergeAll([
  require('./to-all-have-even-age'),
  require('./to-have-length')
]);
