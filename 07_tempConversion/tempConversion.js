const ftoc = function(fahreneit) {
//ftoc(32) // fahrenheit to celsius, should return 0
var toCelsius = (fahreneit - 32) * 5/9;
var rounded = Math.round(toCelsius * 10) / 10;
return rounded;
};

const ctof = function(celsius) {
//ctof(0) // celsius to fahrenheit, should return 32
var toFahreneit = celsius*9/5 + 32;
var rounded = Math.round(toFahreneit * 10) / 10;
return rounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
