//    C = (F - 32) ÷ 9/5
//    F = (C × 9/5) + 32


const convertToCelsius = function(value) {
  return Math.round(((value - 32) / (9/5)) * 10) / 10;
};

const convertToFahrenheit = function(value) {
  return Math.round(((value * (9/5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
