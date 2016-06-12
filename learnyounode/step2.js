console.log (process.argv
  .slice(2)
  .reduce(function(prev, current) {
    return Number(prev) + Number(current);
  })
);

