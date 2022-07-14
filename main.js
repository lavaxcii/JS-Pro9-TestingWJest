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

function calculator(a, b) {
  return a + b;
}

function caesarCipher(a, b) {
  return a + b;
}

function analyzeArray(a, b) {
  return a + b;
}


module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };