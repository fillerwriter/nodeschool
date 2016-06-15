var concat = require('concat-stream');

process.stdin
  .pipe(concat(function(buffer) {
    var content = buffer.toString();
    console.log(reverse(content));
  }));

// From http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}