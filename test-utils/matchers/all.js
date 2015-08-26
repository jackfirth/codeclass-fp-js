var mergeAll = require('ramda').mergeAll;


module.exports = mergeAll([
  require('./to-all-have-even-age'),
  require('./to-all-be-strings'),
  require('./to-all-be-objects'),
  require('./to-have-length'),
  require('./to-have-same-items-as'),
  require('./to-be-subset-of')
]);
