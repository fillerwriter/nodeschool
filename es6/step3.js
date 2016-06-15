var inputs = process.argv.slice(2);
var result = inputs.map(x => x.substr(0, 1))
               .reduce((x, y) => x + y);

console.log(`[${inputs}] becomes "${result}"`);
