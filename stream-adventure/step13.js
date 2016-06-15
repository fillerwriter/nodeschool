var combine = require("stream-combiner"),
    split   = require("split"),
    zlib = require('zlib'),
    through = require('through2');

module.exports = function() {
  var processed = {};

  var rs = through.obj(function(chunk, enc, next) {

    next();
  })
    .on('end', function() {
      this.push(processed);
    });

  return combine(process.stdin, split(), rs, zlib.createGzip());
};
