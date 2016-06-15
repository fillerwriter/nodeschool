module.exports = function makeImportant(inputString, importanceCount = inputString.length) {
  return `${inputString}${'!'.repeat(importanceCount)}`;
};
