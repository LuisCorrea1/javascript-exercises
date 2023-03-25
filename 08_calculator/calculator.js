const add = function (a, b) {
  let result = a + b;
  return result;
};

const subtract = function (a, b) {
  let result = a - b;
  return result;
};

const sum = function (array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function (array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result = (array[i] * result);
  }
  return result;
};

const power = function (a, b) {
  let result = 0;
  result = Math.pow(a, b);
  return result;
};

const factorial = function (n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
