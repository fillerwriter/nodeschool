module.exports = function average(...args) {
  var result = args.reduce((x, y) => x + y)
  return result / args.length;
};
