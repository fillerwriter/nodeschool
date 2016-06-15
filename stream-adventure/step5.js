var through = require('through2');
var split   = require('split');
var stream  = through(write, end);
var isEven  = false;

function write(line, encoding, next) {
  var content = line.toString();

  if (isEven) {
    content = content.toUpperCase();
  } else {
    content = content.toLowerCase();
  }

  this.push(content + '\n');
  isEven = !isEven;
  next();
}

function end(done) {
  done();
}

process.stdin
  .pipe(split())
  .pipe(stream)
  .pipe(process.stdout);
