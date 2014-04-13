var getNumber = require('./lib/get-number');
function convertNumeralToNumber(numeral) {
  var decimal = 0;
  for (var i = 0; i < numeral.length; i++) {
    decimal += getDecimal(getNumber(numeral[i]), getNumber(numeral[i + 1]));
  }
  return decimal;
}

var getDecimal = function (n, nPlusOne) {
  if (nPlusOne) {
    return (n < nPlusOne ? -n : n);
  }
  return n;
}

module.exports = convertNumeralToNumber;

