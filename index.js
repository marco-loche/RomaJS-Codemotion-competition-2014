var getNumber = require('./lib/get-number');
function convertNumeralToNumber(numeral) {
  if (numeral.length === 1) {
    return getNumber(numeral[0]);
  }
  return getDecimal(getNumber(numeral[0]), getNumber(numeral[1])) + convertNumeralToNumber(numeral.substr(1, numeral.length));
}

var getDecimal = function (n, nPlusOne) {
  return (n < nPlusOne ? -n : n);
}

module.exports = convertNumeralToNumber;

