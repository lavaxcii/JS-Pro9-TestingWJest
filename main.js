function capitalize(string) {
  let splitString = string.split('');
  splitString[0] = splitString[0].toUpperCase();
  let result = splitString.toString().replace(/,/g, ""); 
  return result;
}

function reverseString(string) {
  let splitString = string.split('');
  let result = [];
  for (let i = splitString.length - 1; i >= 0; i--) {
    result.push(splitString[i]);
  };
  result = result.toString().replace(/,/g, "");
  return result;
}

// const Calculator = --||--
const calc = (() => {
  const add = (num1, num2) => {
    let result = num1 + num2;
    return result
  }
  const subtract = (num1, num2) => {
    let result = num1 - num2;
    return result
  }
  const multiply = (num1, num2) => {
    let result = num1 * num2;
    return result
  }
  const divide = (num1, num2) => {
    let result = num1 / num2;
    return result
  }
  return { add, subtract, multiply, divide };
})()
// const calc = Calculator();

function caesarCipher(a, b) {
  return a + b;
}

function analyzeArray(a, b) {
  return a + b;
}


module.exports = { capitalize, reverseString, calc, caesarCipher, analyzeArray };