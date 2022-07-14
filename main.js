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

const cipher = (() => {
  let rawString;
  let result = [];
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  const cipherIt = (string) => {
    if (rawString === undefined) {
      rawString = undefined;
      result = []
    } else {
      rawString = undefined;
      result = [];
    }
    rawString = string.split('');
    for (let i = 0; i <= rawString.length - 1; i++) {
      for (let j = 0; j <= alphabet.length - 1; j++) {
        if (rawString[i] === alphabet[j]) {
          result.push(alphabet[j + 1]);
        };
      };
    };
    result = result.toString().replace(/,/g, "");
    return result;
  };

  const decipherIt = (string) => {
    if (rawString === undefined) {
      rawString = undefined;
      result = []
    } else {
      rawString = undefined;
      result = [];
    }
    rawString = string.split('');
    for (let i = 0; i <= rawString.length - 1; i++) {
      for (let j = 0; j <= alphabet.length - 1; j++) {
        if (rawString[i] === alphabet[j]) {
          result.push(alphabet[j - 1]);
        };
      };
    };
    result = result.toString().replace(/,/g, "");
    return result;
  };  

  return { cipherIt, decipherIt };
})()

function analyzeArray(a, b) {
  return a + b;
}


module.exports = { capitalize, reverseString, calc, cipher, analyzeArray };