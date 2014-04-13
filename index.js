var getNumber = require('./lib/get-number');
function convertNumeralToNumber(numeral) {
  var decimal = 0;
  for (var i = 0; i < numeral.length; i++) {
    if ( numeral[i + 1] && getNumber(numeral[i]) < getNumber(numeral[i + 1]) )
      decimal -= getNumber(numeral[i]);
    else
      decimal += getNumber(numeral[i]);
  }
  return decimal;
}

module.exports = convertNumeralToNumber;

