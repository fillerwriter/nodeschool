"use strict";

const duplexer  = require("duplexer2");
const through   = require("through2").obj;

module.exports = function (counter) {
  let countObj = {},
      input    = through(write, end);

  return duplexer({objectMode: true}, input, counter);
  
  function write(row, encoding, next) {
    if (!countObj[row.country]) {
      countObj[row.country] = 0;
    }

    countObj[row.country]++;
    next();
  }
  
  function end(done) {
    counter.setCounts(countObj);
    done();
  }
};
