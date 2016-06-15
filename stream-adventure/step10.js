var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var loudStream = tr.select('.loud').createStream();

loudStream
  .pipe(through(transformToUpper))
  .pipe(loudStream);

function transformToUpper(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

process.stdin
  .pipe(tr)
  .pipe(process.stdout);
